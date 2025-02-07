import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section className="section service" id="services" aria-label="service">
      <div className="container">
        <p className="section-subtitle text-center">-What We Offer-</p>

        <h2 className="h2 section-title text-center">Our Creative Services</h2>

        <p className="section-text text-center">
          Get the most of reduction in your team’s operating costs for the whole product which creates amazing UI/UX
          experiences.
        </p>

        <ul className="grid-list">
          <li>
            <div className="service-card has-after">
              <figure className="card-icon">
                <img
                  src="./assets/images/service-1.png"
                  width="140"
                  height="140"
                  loading="lazy"
                  alt="UI/UX Creative Design"
                  className="img"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">UI/UX Creative Design</h3>

                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                  adipiscing elit.
                </p>

                <a href="#" className="btn-link">
                  <span className="span">Read More</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card has-after">
              <figure className="card-icon">
                <img
                  src="./assets/images/service-2.png"
                  width="140"
                  height="140"
                  loading="lazy"
                  alt="App Development"
                  className="img"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">App Development</h3>

                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                  adipiscing elit.
                </p>

                <a href="#" className="btn-link">
                  <span className="span">Read More</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card has-after">
              <figure className="card-icon">
                <img
                  src="./assets/images/service-3.png"
                  width="140"
                  height="140"
                  loading="lazy"
                  alt="Professional Content Writer"
                  className="img"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">Professional Content Writer</h3>

                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                  adipiscing elit.
                </p>

                <a href="#" className="btn-link">
                  <span className="span">Read More</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="service-card has-after">
              <figure className="card-icon">
                <img
                  src="./assets/images/service-4.png"
                  width="140"
                  height="140"
                  loading="lazy"
                  alt="Graphic Design"
                  className="img"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3 card-title">Graphic Design</h3>

                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and
                  adipiscing elit.
                </p>

                <a href="#" className="btn-link">
                  <span className="span">Read More</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </div>
          </li>
        </ul>

        <a href="#" className="btn btn-primary">Get Started</a>
      </div>
    </section>
  );
};

export default Services;
