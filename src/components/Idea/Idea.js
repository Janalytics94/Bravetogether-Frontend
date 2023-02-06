import React from "react";
import { useTranslation } from "react-i18next";
import "./Idea.scss";

const Idea = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="idea"></div>
      <div className="background_idea">
        <div className="idea_containter">
          <h2>{t("theidea.1")}</h2>
          <p className="idea">{t("theidea.2")}</p>
        </div>
      </div>
    </>
  );
};

export default Idea;
