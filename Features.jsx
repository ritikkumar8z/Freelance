import React from "react";
import "./features.css"; // Ensure the path is correct

const Features = () => {
  return (
    <section className="section features" id="features" aria-label="features">
      <div className="container">
        <p className="section-subtitle text-center">-Why Choose Us-</p>
        <h2 className="h2 section-title text-center">Reasons to Choose Us</h2>
        <p className="section-text text-center">
          Get the most of reduction in your team’s operating costs for the whole product which creates amazing UI/UX
          experiences.
        </p>

        <ul className="grid-list">
          {/* Repeat the structure of the features cards */}
          <li>
            <div className="features-card">
              <data className="card-number" value="01">01</data>
              <h3 className="h3 card-title">Free Icon Plugin</h3>
              <p className="card-text">Nullam ullamcorper condimentum urna eu accumsan.</p>
            </div>
          </li>
          {/* Add other cards */}
        </ul>
      </div>
    </section>
  );
};

export default Features;
