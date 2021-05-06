import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderStyle";
const Header = () => {
  return (
    <HeaderContainer>
      <div onClick={() => window.scroll(0, 0)}>
        <span>🎥</span> Movie <span className="logo">Hub.</span>
      </div>
      <div>
        <Link to="/signin">
          {" "}
          <span className="btn">Sign In</span>{" "}
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
