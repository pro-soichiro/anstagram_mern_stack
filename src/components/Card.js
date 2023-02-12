import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <Link className="card" to={`/users/${user._id}`}>
      <p className="card__name-kana">
        {user.lastNameKana} {user.firstNameKana}
      </p>
      <p className="card__name">
        {user.lastName} {user.firstName}
      </p>
      <p className="card__description">部署: {user.department}</p>
    </Link>
  );
};

export default Card;
