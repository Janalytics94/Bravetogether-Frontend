import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navigation.scss";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  function handleChangeLanguage(lang) {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  }

  return (
    <Navbar
      className="color-nav px-2"
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand as={HashLink} smooth to="/#">
        <b>BraveTogether</b>
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav" className="px-2">
        <Nav className="flex-grow-1">
          <Nav.Link as={HashLink} smooth to="/#aboutme">
            {t("navbar.1")}
          </Nav.Link>
          <Nav.Link as={HashLink} smooth to="/#idea">
            {t("navbar.2")}
          </Nav.Link>
          <Nav.Link as={HashLink} smooth to="/#support">
            {t("navbar.3")}
          </Nav.Link>
          <Nav.Link as={HashLink} smooth to="/#experience">
            {t("navbar.4")}
          </Nav.Link>
          <Nav.Link as={Link} to="/hilfe">
            {t("navbar.5")}
          </Nav.Link>
        </Nav>

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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
