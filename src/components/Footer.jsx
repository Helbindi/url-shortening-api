import React from "react";
import logo from "../assets/images/logo.svg";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="shortly-logo" />

      <section>
        <h2>Features</h2>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </section>

      <section>
        <h2>Resources</h2>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </section>

      <section>
        <h2>Company</h2>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </section>

      <div className="links-group"></div>
    </footer>
  );
}

export default Footer;
