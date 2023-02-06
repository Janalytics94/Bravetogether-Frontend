import React from "react";
import "./Help.scss";

import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Help = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="margin_help">
        <div className="help_backgroundcolor">
          <div id="support"> </div>
          <div className="help_containter help">
            <div data-aos="fade-up">
              <h2> {t("help.1")}</h2>
              <p>{t("help.2")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
