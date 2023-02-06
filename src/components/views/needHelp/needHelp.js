import React from "react";

import { useTranslation } from "react-i18next";
import Footer from "../../Footer/Footer";
import "./needHelp.css";

const NeedHelp = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="need_help_containter">
        <h1 className="h1">{t("needhelp.1")}</h1>

        <div className="float-container">
          <div className="float-child">
            <a
              className="href-help"
              href="https://www.ffgz.de"
              target="_blank"
              rel="noreferrer"
            >
              <div className="need_help_box">
                <p className="header-need-help">
                  {" "}
                  Feministisches Frauen Gesundheits Zentrum e. V. Berlin - Der
                  Ort der Frauengesundheit{" "}
                </p>
                {t("needhelp.2")}: Bamberger Str. 51, 10777 Berlin <br />
                {t("needhelp.3")}: 030 - 213 95 97 <br />
                {t("needhelp.4")}: ffgzberlin@snafu.de <br />
                {t("needhelp.5")}: www.ffgz.de
              </div>
            </a>
          </div>

          <div className="float-child">
            <a
              className="href-help"
              href="https://lara-berlin.de/home"
              target="_blank"
              rel="noreferrer"
            >
              <div className="need_help_box">
                <p className="header-need-help">
                  LARA -Krisen- und Beratungszentrum f. vergewaltigte Frauen{" "}
                </p>
                {t("needhelp.2")}: Fuggerstraße 19, 10777 Berlin <br />
                {t("needhelp.3")}: 030 - 216 88 88
                <br />
                {t("needhelp.4")}: Lara.KuB@t-online.de
                <br />
                {t("needhelp.5")}: https://lara-berlin.de/home
              </div>
            </a>
          </div>
        </div>

        <div className="float-container">
          <div className="float-child">
            <a
              className="href-help"
              href="https://wildwasser-berlin.de"
              target="_blank"
              rel="noreferrer"
            >
              <div className="need_help_box">
                <p className="header-need-help">
                  Wildwasser - Mädchennotdienst{" "}
                </p>
                {t("needhelp.3")}: 030 - 21 00 39 90
                <br />
                {t("needhelp.4")}: maedchennotdienst@wildwasser-berlin.de
                <br />
                {t("needhelp.5")}: www.wildwasser-berlin.de
                <br />
              </div>
            </a>
          </div>

          <div className="float-child">
            <a
              className="href-help"
              href="https://wildwasser-berlin.de"
              target="_blank"
              rel="noreferrer"
            >
              <div className="need_help_box">
                <p className="header-need-help">
                  Wildwasser - Mädchenberatungsstelle Wedding{" "}
                </p>
                {t("needhelp.3")}: 030 - 486 28 222
                <br />
                {t("needhelp.4")}: wriezener@wildwasser-berlin.de
                <br />
                {t("needhelp.5")}: www.wildwasser-berlin.de
                <br />
              </div>
            </a>
          </div>
        </div>

        <div className="float-container">
          <div className="float-child">
            <a
              className="href-help"
              href="https://wildwasser-berlin.de"
              target="_blank"
              rel="noreferrer"
            >
              <div className="need_help_box">
                <p className="header-need-help">
                  Wildwasser - Mädchenberatungsstelle Mitte{" "}
                </p>
                {t("needhelp.3")}: 030 - 2 82 44 27
                <br />
                {t("needhelp.4")}: dircksen@wildwasser-berlin.de
                <br />
                {t("needhelp.5")}: www.wildwasser-berlin.de
              </div>
            </a>
          </div>

          <div className="float-child">
            <a
              className="href-help"
              href="https://wildwasser-berlin.de"
              target="_blank"
              rel="noreferrer"
            >
              <div className="need_help_box">
                <p className="header-need-help">
                  Wildwasser - Selbsthilfe & Beratung{" "}
                </p>
                {t("needhelp.3")}: 030 - 6 93 91 92
                <br />
                {t("needhelp.4")}: Selbsthilfe@wildwasser-berlin.de
                <br />
                {t("needhelp.5")}: www.wildwasser-berlin.de
                <br />
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NeedHelp;
