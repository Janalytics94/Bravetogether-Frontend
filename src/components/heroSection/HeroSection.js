import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import "./HeroSection.css";

function HeroSection() {
  const { t } = useTranslation();

  const style1 = {
    position: "absolute",
    right: "0",
    bottom: "0",
    marginBottom: "120px",
    marginRight: "100px",
    borderRadius: "100px",
    fontSize: "20px",
    height: "60px",
    width: "300px",
  };

  const style_1_1 = {
    position: "absolute",
    right: "0",
    bottom: "0",
    marginBottom: "220px",
    marginRight: "100px",
    borderRadius: "100px",
    fontSize: "20px",
    height: "60px",
    width: "250px",
  };

  const style2 = {
    position: "absolute",
    right: "0",
    bottom: "0",
    marginBottom: "20px",
    marginRight: "100px",
    borderRadius: "100px",
    fontSize: "20px",
    height: "60px",
    width: "300px",
    zIndex: "2",
  };

  const style_2_1 = {
    position: "absolute",
    right: "0",
    bottom: "0",
    marginBottom: "140px",
    marginRight: "100px",
    borderRadius: "100px",
    fontSize: "20px",
    height: "60px",
    width: "250px",
  };

  return (
    <>
      <div className="hero-container">
        <h2 className="header-hero-section">
          {t("herosection.3")}
          <p className="text-hero-section">{t("herosection.4")}</p>
        </h2>

        <div className="btn">
          <div className="button1">
            <HashLink to="#experience">
              <Button style={style1} variant="outline-light">
                {t("herosection.1")}
              </Button>
            </HashLink>
          </div>

          <div className="button1_mobile">
            <HashLink to="#experience">
              <Button style={style_1_1} variant="light">
                {t("herosection.1")}
              </Button>
            </HashLink>
          </div>

          <div className="button2">
            <HashLink to="#aboutme">
              <Button style={style2} variant="outline-light">
                {t("herosection.2")}
              </Button>
            </HashLink>
          </div>

          <div className="button2_mobile">
            <HashLink to="#aboutme">
              <Button style={style_2_1} variant="light">
                {t("herosection.2")}
              </Button>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
