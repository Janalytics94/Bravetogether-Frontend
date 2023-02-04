import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as ReactBootStrap from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  function handleChangeLanguage(lang) {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  }

  return (
    <div className="mobile">
      <ReactBootStrap.Navbar
        className="color-nav"
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
      >
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Navbar.Brand href="/">
              <b>BraveTogether</b>
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav className="mr-auto">
              <AnchorLink className="link-nav" href="#aboutme">
                <Link className="link-nav" to="/">
                  <ReactBootStrap.Nav.Link href="/">
                    {" "}
                    <div className="link-nav"> {t("navbar.1")}</div>
                  </ReactBootStrap.Nav.Link>
                </Link>
              </AnchorLink>

              <AnchorLink href="#idea" className="link-nav">
                <Link to="/" className="link-nav">
                  <ReactBootStrap.Nav.Link href="/">
                    {t("navbar.2")}
                  </ReactBootStrap.Nav.Link>
                </Link>
              </AnchorLink>

              <AnchorLink href="#support" className="link-nav">
                <Link to="/" className="link-nav">
                  <ReactBootStrap.Nav.Link href="/">
                    {t("navbar.3")}
                  </ReactBootStrap.Nav.Link>
                </Link>
              </AnchorLink>

              <AnchorLink href="#experience" className="link-nav">
                <Link to="/" className="link-nav">
                  <ReactBootStrap.Nav.Link href="/">
                    {t("navbar.4")}
                  </ReactBootStrap.Nav.Link>
                </Link>
              </AnchorLink>

              <ReactBootStrap.Nav.Link href="/hilfe">
                {t("navbar.5")}
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Form inline></ReactBootStrap.Form>
          </ReactBootStrap.Nav>

          <button
            className={`button-navbar px-2 text-${
              currentLanguage === "ger"
                ? "white text-decoration-underline"
                : "muted"
            }`}
            onClick={() => {
              handleChangeLanguage("ger");
            }}
          >
            DE
          </button>
          <span className="text-white">/</span>
          <button
            className={`button-navbar px-2 text-${
              currentLanguage === "en"
                ? "white text-decoration-underline"
                : "muted"
            }`}
            onClick={() => {
              handleChangeLanguage("en");
            }}
          >
            EN
          </button>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Navbar;
