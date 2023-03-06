import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icons8-menu-50.png";
import close from "../assets/images/icons8-close-50.png";

function Navigation() {
  const [isMobileNav, setisMobileNav] = useState(false);

  const mobileNav = isMobileNav ? close : menu;

  function handleMobile(e) {
    e.preventDefault();
    if (isMobileNav) {
      setisMobileNav(false);
    } else {
      setisMobileNav(true);
    }
  }
  return (
    <header className="nav-header">
      <img src={logo} alt="shortly-logo" />
      <img
        className="mobile-nav-icon"
        src={mobileNav}
        alt="menu-icon"
        onClick={(e) => handleMobile(e)}
      />
      <nav aria-expanded={isMobileNav}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className="btn-group">
          <button className="login btn">Login</button>
          <button className="signup btn">Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
