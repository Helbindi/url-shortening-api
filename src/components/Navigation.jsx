import React from "react";
import logo from "../assets/images/logo.svg";

function Navigation() {
  return (
    <header className="nav-header">
      <img src={logo} alt="shortly-logo" />
      <nav>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <div className="btn-group">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
