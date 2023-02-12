import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header__container">
      <header className="header">
        <div className="header__inner">
          <Link to="/">
            <span className="header__icon">
              <FontAwesomeIcon icon={faHouse} />
            </span>
          </Link>
          <nav>
            <ul className="header__ul">
              <li>
                <Link className="header__a" to="/users">
                  一覧
                </Link>
              </li>
              <li>
                <Link className="header__a" to="/users/new">
                  新規作成
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
