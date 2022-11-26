import React from "react";
import "./HeroSection.css";
import { Button } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";

function HeroSection() {
  //const {t, i18n} = useTranslation();
  const { t } = useTranslation();

  // function handleClick(lang) {
  //     i18n.changeLanguage(lang)
  // }

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
            <AnchorLink href="#experience">
              <Button style={style1} variant="outline-light">
                {t("herosection.1")}
              </Button>
            </AnchorLink>
          </div>

          <div className="button1_mobile">
            <AnchorLink href="#experience">
              <Button style={style_1_1} variant="light">
                {t("herosection.1")}
              </Button>
            </AnchorLink>
          </div>

          <div className="button2">
            <AnchorLink href="#aboutme">
              <Button style={style2} variant="outline-light">
                {t("herosection.2")}
              </Button>
            </AnchorLink>
          </div>

          <div className="button2_mobile">
            <AnchorLink href="#aboutme">
              <Button style={style_2_1} variant="light">
                {t("herosection.2")}
              </Button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
