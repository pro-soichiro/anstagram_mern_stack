import { useEffect, useContext, createContext, useReducer } from "react";

import userApi from "../api/user";

const UserContext = createContext();
const UserDispatchContext = createContext();

const useUsers = () => useContext(UserContext);
const useDispatchUsers = () => useContext(UserDispatchContext);

const reducer = (users, action) => {
  switch (action.type) {
    case "user/init":
      return action.users;

    case "user/add":
      return [...users, action.user];

    case "user/delete":
      return users.filter((_user) => _user._id !== action.user._id);

    default:
      return users;
  }
};

const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    userApi.getAll().then((_users) => {
      dispatch({ type: "user/init", users: _users });
    });
  }, []);

  return (
    <UserContext.Provider value={users}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export { useUsers, UserProvider, useDispatchUsers };
