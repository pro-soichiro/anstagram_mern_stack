import { useUsers } from "../contexts/UserContext";

import Card from "../components/Card";

const Users = () => {
  const users = useUsers();

  return (
    <div className="container">
      <h1 className="page-title">ユーザー一覧</h1>
      <div className="cards">
        {users.map((user) => (
          <Card key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
