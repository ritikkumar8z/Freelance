import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <main>
      <article>
        <section className="section hero" id="home" aria-label="hero">
          <div className="container">
            {/* Left Side: Hero Content */}
            <div className="hero-content">
              <p className="hero-subtitle has-before">Welcome to Our Agency</p>
              <h1 className="h1 hero-title">Smart Ideas for your Brand are Here</h1>
              <p className="hero-text">
                Donec tincidunt lacinia diam, eu volutpat est sollicitudin at. Vestibulum ut mi tristique, vulputate ante
                quis, tempus enim. Proin quis euismod purus. Suspendisse efficitur aliquam enim sed consequat.
              </p>
              <div className="btn-group">
                <a href="#" className="btn btn-primary">DISCOVER MORE</a>
                <button className="flex-btn">
                  <div className="btn-icon">
                    <ion-icon name="play" aria-hidden="true"></ion-icon>
                  </div>
                  <span className="span">How it works</span>
                </button>
              </div>
            </div>

            {/* Right Side: Hero Image */}
            <figure className="hero-banner has-before img-holder">
              <img src="./hero-icon.png" alt="hero banner" className="img-cover" />
            </figure>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Hero;
