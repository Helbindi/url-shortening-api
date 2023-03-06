import React from "react";
import logo from "../assets/images/logo.svg";
import fb from "../assets/images/icon-facebook.svg";
import tw from "../assets/images/icon-twitter.svg";
import pin from "../assets/images/icon-pinterest.svg";
import insta from "../assets/images/icon-instagram.svg";

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

      <div className="links-group">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={fb} alt="facebook-icon" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={tw} alt="twitter-icon" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={pin} alt="pinterest-icon" />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="instagram-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
