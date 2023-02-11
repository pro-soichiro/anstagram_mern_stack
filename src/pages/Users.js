import { useUsers } from "../contexts/UserContext";

const Users = () => {
  const users = useUsers();

  return (
    <>
      <h1>Users Page</h1>
      {users.map((user) => user.lastName)}
    </>
  );
};

export default Users;
