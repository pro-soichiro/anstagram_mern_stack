import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  display: inline-block;
  padding: 10px;
  width: 330px;
  border-radius: 5px;
  border: 2px solid var(--d);
  box-shadow: var(--shadow-sp);
  flex-basis: 330px;
  flex-shrink: 1;

  :hover {
    box-shadow: none;
  }
`;

const NameKana = styled.p`
  font-size: 10px;
  color: grey;
  margin: 0;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 5px 0;
`;

const Dep = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

const Card = ({ user }) => {
  return (
    <Link to={`/users/${user._id}`}>
      <StyledCard>
        <NameKana>
          {user.lastNameKana} {user.firstNameKana}
        </NameKana>
        <Name>
          {user.lastName} {user.firstName}
        </Name>
        <Dep>部署: {user.department}</Dep>
      </StyledCard>
    </Link>
  );
};

export default Card;
