import React from "react";
import hero from "../assets/images/illustration-working.svg";

function Hero({ handleRefClick }) {
  return (
    <section className="hero-container">
      <img src={hero} alt="hero-image" />
      <article className="hero-info">
        <h2>More than just shorter links</h2>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn" onClick={(e) => handleRefClick(e)}>
          Get Started
        </button>
      </article>
    </section>
  );
}

export default Hero;
