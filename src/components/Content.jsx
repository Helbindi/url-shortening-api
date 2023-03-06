import React from "react";
import About from "./About";

function Content() {
  return (
    <div className="main-content">
      <div className="shortener">
        <input type="text" name="" id="" placeholder="Shorten a link here..." />
        <button className="btn shorten-btn">Shorten It!</button>
      </div>
      <div className="shorten-links">
        <p>www.google.com</p>
        <div className="short-link">
          <p className="shortened">www.google.com</p>
          <button className="btn copy">Copy</button>
        </div>
      </div>
      <About />
    </div>
  );
}

export default Content;
