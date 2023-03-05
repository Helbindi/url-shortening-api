import React from "react";
import brand from "../assets/images/icon-brand-recognition.svg";
import records from "../assets/images/icon-detailed-records.svg";
import customize from "../assets/images/icon-fully-customizable.svg";

function About() {
  return (
    <section>
      <article>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </article>

      <article>
        <img src={brand} alt="brand-recognition" />
        <h2> Brand Recognition</h2>
        <p>
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </article>

      <article>
        <img src={records} alt="detailed-records" />
        <h2> Detailed Records</h2>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </article>

      <article>
        <img src={customize} alt="fully-customizable" />
        <h2>Fully Customizable</h2>
        <p>
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </article>
    </section>
  );
}

export default About;
