import React from "react";
import "./Help.scss";

import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Help = () => {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div className="margin_help">
        <div className="help_backgroundcolor">
          <div id="support"> </div>
          <div className="help_containter">
            <p className="help" data-aos="fade-up">
              <h2> {t("help.1")}</h2>
              {t("help.2")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
