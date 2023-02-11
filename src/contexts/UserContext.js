import { useEffect, useContext, createContext, useReducer } from "react";

import userApi from "../api/user";

const UserContext = createContext();

const useUsers = () => useContext(UserContext);

const reducer = (users, action) => {
  switch (action.type) {
    case "user/init":
      return action.users;

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

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};

export { useUsers, UserProvider };
