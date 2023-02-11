import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <Link to={`/users/${user._id}`}>
      <h3>
        {user.lastName} {user.firstName}
      </h3>
      <p>
        {user.lastNameKana} {user.firstNameKana}
      </p>

      <div>
        <div>部署</div>
        <p>{user.department}</p>
      </div>
    </Link>
  );
};

export default Card;
