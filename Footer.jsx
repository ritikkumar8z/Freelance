import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Web Development</span>
            <span>Graphic Design</span>
            <span>Content Writing</span>
            <span>Marketing</span>
            <span>Video Editing</span>
            <span>Mobile App Development</span>
            <span>Data Science</span>
            <span>Business Consulting</span>
            <span>Photography</span>
            <span>SEO Services</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Our Story</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property</span>
            <span>Investor Relations</span>
            <span>Contact Us</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help Center</span>
            <span>Trust & Safety</span>
            <span>Selling on Our Platform</span>
            <span>Buying Services</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Success Stories</span>
            <span>Community Hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Refer a Friend</span>
            <span>Become a Freelancer</span>
            <span>Community Guidelines</span>
          </div>
          <div className="item">
            <h2>More From Us</h2>
            <span>Business Solutions</span>
            <span>Pro Services</span>
            <span>Logo Maker</span>
            <span>Guides</span>
            <span>Get Inspired</span>
            <span>Premium Services</span>
            <span>Workspace</span>
            <span>Learn Academy</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>WorkSphere</h2>
            <div className="left">
            <span>© Freelancing Platform, 2025. All Rights Reserved.</span>
            </div>

          </div>
          <div className="right">
            <div className="social">
              <img src="twitter.png" alt="Twitter" />
              <img src="facebook.png" alt="Facebook" />
              <img src="linkedin.png" alt="LinkedIn" />
              <img src="pinterest.png" alt="Pinterest" />
              <img src="instagram.png" alt="Instagram" />
            </div>
            <div className="link">
              <img src="language.png" alt="Language" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="coin.png" alt="Currency" />
              <span>USD</span>
            </div>
            <img src="accessibility.png" alt="Accessibility" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
