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
      <ul className="nav__links-wrapper">
        <li className="nav__link">
          <a href="#">Policz zyski</a>
        </li>
        <li className="nav__link">
          <a href="#">O produkcie</a>
        </li>
        <li className="nav__link">
          <a href="#">Kontakt</a>
        </li>
        <li className="nav__link">
          <a href="#">FAQ</a>
        </li>
      </ul>
      <div className="nav__menu-wrapper">
        <button className="nav__burger-btn">
          <img src={Burger} alt="menu icon" />
        </button>
        <button className="nav__buy-btn">Kup</button>
      </div>
    </nav>
  );
};

export default Navbar;
