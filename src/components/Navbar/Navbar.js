import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [check, setCheck] = useState(true);
  const [colorDe, setColorDe] = useState("white");
  const [colorEn, setColorEn] = useState("gray");

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    if (check === true) {
      setColorDe("white");
      setColorEn("gray");
    }
    if (check === false) {
      setColorDe("gray");
      setColorEn("white");
    }
  }, [check]);

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
            className="button-navbar"
            onClick={() => handleClick("ger") & setCheck(true)}
            style={{ color: colorDe }}
          >
            {" "}
            DE{" "}
          </button>
          <div style={{ color: "white" }}> / </div>
          <button
            className="button-navbar"
            onClick={() => handleClick("en") & setCheck(false)}
            style={{ color: colorEn }}
          >
            {" "}
            EN{" "}
          </button>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Navbar;
