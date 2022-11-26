import React from "react";

import Footer from "../../Footer/Footer";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className="contact_position">
          <h1>{t("contact.1")}</h1>

          <div>Email: Jana@bravetogether.de</div>
          <div>
            Instagram:{" "}
            <a href={"https://www.instagram.com/bravetogether21/"}>
              {" "}
              bravetogether{" "}
            </a>
          </div>
        </div>
        <div className="contact_footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
