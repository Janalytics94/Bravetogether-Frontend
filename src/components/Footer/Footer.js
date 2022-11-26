import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as ReactBootStrap from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/kontakt">Kontakt</Link>
          </div>
          <div className="footer-link-items">
            <a href="https://www.instagram.com/bravetogether21/">Instagram</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">&copy; Copyright 2021</small>
        </div>
      </section>
    </div>
  );
};

export default Footer;
