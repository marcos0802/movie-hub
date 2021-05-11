import React from "react";
import { HeaderContainer } from "./HeaderStyle";
const Header = () => {
  return (
    <HeaderContainer>
      <div onClick={() => window.scroll(0, 0)}>
        <span>🎥</span> Movie <span className="logo">Hub.</span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
