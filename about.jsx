import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <img
            src="./2nd-page.png"
            width="802"
            height="654"
            loading="lazy"
            alt="about banner"
            className="w-100"
          />
        </figure>

        <div className="about-content">
          <h2 className="h2-sm section-title">
            We create some things, Design for your success future.
          </h2>

          <p className="section-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's
            standard dummy text ever since the 1500s.
          </p>

          <ul className="about-list">
            <li className="has-before">Price of additional materials or parts (if needed)</li>
            <li className="has-before">Transportation cost for carrying new materials/parts</li>
            <li className="has-before">You will get a 100% money-back offer</li>
          </ul>

          <div className="btn-group">
            <a href="#" className="btn btn-primary">Know More</a>

            <button className="flex-btn">
              <div className="btn-icon">
                <ion-icon name="medal-outline" aria-hidden="true"></ion-icon>
              </div>
              <span className="span">2+ Years Experience</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
