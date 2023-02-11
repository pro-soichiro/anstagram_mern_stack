import { useUsers } from "../contexts/UserContext";
import styled from "styled-components";

import Card from "../components/Card";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
  justify-content: center;
  gap: 20px;
`;

const Users = () => {
  const users = useUsers();

  return (
    <div className="container">
      <h1 className="page-title">ユーザー一覧</h1>
      <CardContainer>
        {users.map((user) => (
          <Card key={user._id} user={user} />
        ))}
      </CardContainer>
    </div>
  );
};

export default Users;
