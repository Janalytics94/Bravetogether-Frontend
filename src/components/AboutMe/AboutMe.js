import React, { useEffect } from "react";
import "./AboutMe.scss";

import { useTranslation } from "react-i18next";

import Aos from "aos";
import "aos/dist/aos.css";

import JanaImg from "../../images/JanaWebsite.jpeg";

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let scrollRef = 0;

  window.addEventListener("scroll", function () {
    // increase value up to 10, then refresh AOS
    scrollRef <= 1 ? scrollRef++ : Aos.refresh();
  });

  return (
    <>
      <div className="background_about_me">
        <div className="about_me_containter">
          <div style={{ marginTop: "-550px" }} id="aboutme"></div>

          <div className="first">
            {i18n["language"] === "ger" ? (
              <img className="about_me_img_ger" alt="Bild" src={JanaImg} />
            ) : (
              <img className="about_me_img_en" alt="Bild" src={JanaImg} />
            )}
          </div>
          <div className="second">
            <h2> {t("aboutme.1")}</h2>
            <p className="about_me">{t("aboutme.2")}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
