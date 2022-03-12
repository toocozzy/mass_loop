import React from "react";
import Logo from "../../assets/images/logo.png";
import Burger from "../../assets/icons/icon_burger.png";

import "../../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="nav__logo-wrapper">
        <img src={Logo} alt="mass loop logo" className="nav__logo" />
      </div>
      <div className="nav__menu-wrapper">
        <button className="nav__menu-btn">
          <img src={Burger} alt="menu icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
