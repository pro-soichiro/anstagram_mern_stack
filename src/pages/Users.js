import { useUsers } from "../contexts/UserContext";

import Card from "../components/Card";

const Users = () => {
  const users = useUsers();

  return (
    <>
      <h1>ユーザー一覧</h1>
      <div>
        {users.map((user) => (
          <Card key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
