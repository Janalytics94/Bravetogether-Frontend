import React from "react";
import "./AboutMe.scss";
import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import TestBild from "../../images/bw2.jpeg";

import AnchorLink from "react-anchor-link-smooth-scroll";
//import { Link } from 'react-router-dom';

import Aos from "aos";
import "aos/dist/aos.css";
import IdeaImg from "../../images/Idea.jpg";

import JanaImg from "../../images/JanaWebsite.jpeg";

const AboutMe = () => {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

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
            <p className="about_me">
              <h2> {t("aboutme.1")}</h2>
              {t("aboutme.2")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
