import React from "react";
import "./Idea.scss";
import { useTranslation } from "react-i18next";

const Idea = () => {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div id="idea"></div>
      <div className="background_idea">
        <div className="idea_containter">
          <p className="idea">
            <h2>{t("theidea.1")}</h2>
            {t("theidea.2")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Idea;
