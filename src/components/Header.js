import { Link } from "react-router-dom";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.div`
  background-color: var(--a);
  width: 100%;
`
const StyledHeader = styled.header`
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px;
`;

const HeaderInner = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.span`
  margin-left: 10px;
  color: white;
  font-size: 30px;
  :hover {
    color: var(--c)
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  a {
    padding: 0 12px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.5;
    color: white;
    :hover {
      color: var(--c)
    }
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader>
        <HeaderInner>
          <Link to="/">
            <Icon>
              <FontAwesomeIcon icon={faHouse} />
            </Icon>
          </Link>
          <nav>
            <Ul>
              <li>
                <Link to="/users">ユーザー一覧</Link>
              </li>
              <li>
                <Link to="/users">ユーザー一覧</Link>
              </li>
              <li>
                <Link to="/users">ユーザー一覧</Link>
              </li>
            </Ul>
          </nav>
        </HeaderInner>
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
