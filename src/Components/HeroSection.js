import React from "react";
import hero_logo from "../assets/hero-logo.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="container">
      <div className="hero-section">
        <h1>
          Optimize Your Online Experience with Our Advanced URL Shortening
          Solution
        </h1>

        <p className="desc">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>

        <div>
          <Link className="button1">Sign Up</Link>

          <Link className="link">Learn more</Link>
        </div>

        <img src={hero_logo} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
