import React, { useContext, useState, useCallback, Suspense } from "react";
import "./Questions.scss";
import * as ReactBootStrap from "react-bootstrap";
import { useTranslation } from "react-i18next";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Formik } from "formik";
import * as yup from "yup";

import "bootstrap-daterangepicker/daterangepicker.css";
import "bootstrap/dist/css/bootstrap.css";

import en from "date-fns/locale/en-US";
import de from "date-fns/locale/de";

registerLocale("de", de);
registerLocale("el", en);

const Questions = () => {
  const [date, setDate] = useState(new Date());
  const [sex, setSex] = useState("diverse");
  const [age, setAge] = useState(0);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState();
  const [light, setLight] = useState();
  const [publicTraffic, setPublicTraffic] = useState();
  const [line, setLine] = useState();
  const [place, setPlace] = useState("");
  const [namePlace, setNamePlace] = useState("");
  const [people, setPeople] = useState();
  const [circumstancesWhere, setCircumstancesWhere] = useState();
  const [circumstancesWhat, setCircumstancesWhat] = useState();
  const [circumstancesReport, setCircumstancesReport] = useState();

  const [yes, setYes] = useState();
  const [no, setNo] = useState();
  const [what1, setWhat1] = useState();
  const [feel, setFeel] = useState("");
  const [report, setReport] = useState("");
  const [dataProtection, setDataProtection] = useState(false);

  const [booleanPublic, setBooleanPublic] = useState(false);
  const [booleanTrain, setBooleanTrain] = useState(false);

  const [checkbox, setCheckbox] = useState(false);

  //TEST
  const [field, setField] = useState([]);
  //TEST

  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const schema = yup.object().shape({
    /*            firstName: yup.string().required(),
                    lastName: yup.string().required(),
                    username: yup.string().required(),
                    city: yup.string().required(),
                    state: yup.string().required(),
                    zip: yup.string().required(),*/

    terms: yup.bool().required().oneOf([true], t("questions.46")),
  });
  const fetchSurvery = useCallback(async () => {
    const requestOptions = {
      method: "POST",
      //crossDomain:true,
      //mode: 'no-cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sex: sex,
        age: age,
        when: date,
        where: {
          transport: publicTraffic,
          line: line,
          publicSpace: place,
          nameSpace: namePlace,
          circumstancesWhere: circumstancesWhere,
        },
        address: {
          street: street,
          postcode: postcode,
          city: city,
        },
        what: {
          kindOfAttack: kindOfAttack,
          circumstancesWhat: circumstancesWhat,
        },
        circumstances: {
          light: light,
          publicTransport: publicTraffic,
          people: people,
        },
        reported: { No: no, Yes: yes, report: report },
        feelings: feel,
      }),
    };
    const result = await fetch(
      "https://34a0a8c8i6.execute-api.eu-central-1.amazonaws.com/api/UserSurveys/add",
      requestOptions
    );
  });

  const [kindOfAttack, setKindOfAttack] = useState([]);
  const handleSelect = function (selectedItems) {
    const harassement = [];
    for (let i = 0; i < selectedItems.length; i++) {
      harassement.push(selectedItems[i].value);
    }
    setKindOfAttack(harassement);
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: "Mark",
          lastName: "Otto",
          username: "",
          city: "",
          state: "",
          zip: "",
          terms: false,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <div style={{ backgroundColor: "white" }}>
            <div className="questions_containter">
              <p className="questions" data-aos="fade-right"></p>
              <div className="form_font">
                <h1 className="questions_header"> {t("questions.1")}</h1>

                <ReactBootStrap.Form>
                  <ReactBootStrap.Form.Row>
                    <ReactBootStrap.Form.Group
                      as={ReactBootStrap.Col}
                      controlId="formGridState"
                    >
                      <ReactBootStrap.Form.Label>
                        {" "}
                        {t("questions.2")}
                      </ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control
                        size="md"
                        as="select"
                        defaultValue="Choose..."
                        onChange={(e) => setSex(e.target.value)}
                      >
                        <option>{t("questions.16")}</option>
                        <option>{t("questions.10")}</option>
                        <option>{t("questions.9")}</option>
                        <option>{t("questions.11")}</option>
                      </ReactBootStrap.Form.Control>
                    </ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.Group
                      as={ReactBootStrap.Col}
                      controlId="Alter"
                    >
                      <ReactBootStrap.Form.Label>
                        {" "}
                        {t("questions.2_2")}{" "}
                      </ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control
                        size="md"
                        className="form-control"
                        placeholder={t("questions.2_3")}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </ReactBootStrap.Form.Group>
                  </ReactBootStrap.Form.Row>

                  <h4 className="header_question">{t("questions.35")}</h4>
                  <ReactBootStrap.Form.Row>
                    <ReactBootStrap.Form.Group
                      as={ReactBootStrap.Col}
                      controlId="formGridPassword"
                    >
                      <ReactBootStrap.Form.Label>
                        {t("questions.3")}
                      </ReactBootStrap.Form.Label>
                      {i18n["language"] === "en" ? (
                        <DatePicker
                          timeInputLabel="Time:"
                          dateFormat="MM/dd/yyyy h:mm aa"
                          showTimeInput
                          selected={date}
                          onChange={(date) => setDate(date)}
                          locale="en"
                        />
                      ) : (
                        <DatePicker
                          dateFormat="MM/dd/yyyy h:mm"
                          showTimeInput
                          selected={date}
                          onChange={(date) => setDate(date)}
                          locale="de"
                        />
                      )}
                    </ReactBootStrap.Form.Group>
                  </ReactBootStrap.Form.Row>

                  <h4 className="header_question">{t("questions.36")}</h4>

                  <ReactBootStrap.Form.Label>
                    {t("questions.4")}
                  </ReactBootStrap.Form.Label>

                  <ReactBootStrap.Form.Group
                    as={ReactBootStrap.Col}
                    controlId="formHorizontalCheck"
                  >
                    <ReactBootStrap.Form.Check
                      label={t("questions.31")}
                      onChange={(e) => setBooleanTrain(!booleanTrain)}
                    />
                  </ReactBootStrap.Form.Group>
                  {booleanTrain ? (
                    <>
                      <ReactBootStrap.Form.Row>
                        <ReactBootStrap.Form.Group
                          sm={6}
                          as={ReactBootStrap.Col}
                          controlId="Verkehrsmittel"
                        >
                          <ReactBootStrap.Form.Label>
                            {t("questions.4_2")}
                          </ReactBootStrap.Form.Label>
                          <ReactBootStrap.Form.Control
                            size="md"
                            as="select"
                            onChange={(e) => setPublicTraffic(e.target.value)}
                          >
                            <option>{t("questions.16")}</option>
                            <option>{t("questions.38")}</option>
                            <option>{t("questions.39")}</option>
                            <option>{t("questions.40")}</option>
                            <option>{t("questions.41")}</option>
                          </ReactBootStrap.Form.Control>
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Group
                          sm={6}
                          as={ReactBootStrap.Col}
                          controlId="2"
                        >
                          <ReactBootStrap.Form.Label>
                            {t("questions.6")}
                          </ReactBootStrap.Form.Label>
                          <ReactBootStrap.Form.Control
                            size="md"
                            placeholder={t("questions.13")}
                            onChange={(e) => setLine(e.target.value)}
                          />
                        </ReactBootStrap.Form.Group>
                      </ReactBootStrap.Form.Row>
                    </>
                  ) : (
                    <></>
                  )}

                  <ReactBootStrap.Form.Label>
                    {t("questions.4_1")}
                  </ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Group
                    as={ReactBootStrap.Col}
                    controlId="formHorizontalCheck"
                  >
                    <ReactBootStrap.Form.Check
                      label={t("questions.31")}
                      onChange={(e) => setBooleanPublic(!booleanPublic)}
                    />
                  </ReactBootStrap.Form.Group>

                  {booleanPublic ? (
                    <>
                      <ReactBootStrap.Form.Row>
                        <ReactBootStrap.Form.Group
                          sm={6}
                          as={ReactBootStrap.Col}
                          controlId="ÖffentlicherPlatz"
                        >
                          <ReactBootStrap.Form.Label>
                            {t("questions.4_3")}
                          </ReactBootStrap.Form.Label>
                          <ReactBootStrap.Form.Control
                            size="md"
                            as="select"
                            onChange={(e) => setPlace(e.target.value)}
                          >
                            <option>{t("questions.16")}</option>
                            <option>{t("questions.47")}</option>
                            <option>{t("questions.48")}</option>
                          </ReactBootStrap.Form.Control>
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Form.Group
                          sm={6}
                          as={ReactBootStrap.Col}
                          controlId="2"
                        >
                          <ReactBootStrap.Form.Label>
                            {t("questions.49")}
                          </ReactBootStrap.Form.Label>
                          <ReactBootStrap.Form.Control
                            size="md"
                            placeholder={t("questions.50")}
                            onChange={(e) => setNamePlace(e.target.value)}
                          />
                        </ReactBootStrap.Form.Group>
                      </ReactBootStrap.Form.Row>
                    </>
                  ) : (
                    <></>
                  )}

                  <ReactBootStrap.Form.Group controlId="1">
                    <ReactBootStrap.Form.Label>
                      {t("questions.5_1")}
                    </ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control
                      size="md"
                      as="textarea"
                      placeholder={t("questions.14_1")}
                      style={{ height: "150px" }}
                      onChange={(e) => setCircumstancesWhere(e.target.value)}
                    />
                  </ReactBootStrap.Form.Group>

                  <ReactBootStrap.Form.Label>
                    Wie lautet die (ungefähre) Adresse des Vorfalls?
                  </ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Row>
                    <ReactBootStrap.Form.Group
                      md={4}
                      as={ReactBootStrap.Col}
                      controlId="Wo"
                    >
                      <ReactBootStrap.Form.Label>
                        {t("questions.15")}
                      </ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control
                        size="md"
                        placeholder={t("questions.15_1")}
                        onChange={(e) => setStreet(e.target.value)}
                      />
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Form.Group
                      md={4}
                      as={ReactBootStrap.Col}
                      controlId="formGridZip"
                    >
                      <ReactBootStrap.Form.Label>
                        {t("questions.27")}
                      </ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control
                        size="md"
                        placeholder={t("questions.27")}
                        onChange={(e) => setPostcode(e.target.value)}
                      />
                    </ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.Group
                      md={4}
                      as={ReactBootStrap.Col}
                      controlId="Adresse"
                    >
                      <ReactBootStrap.Form.Label>
                        {t("questions.26")}
                      </ReactBootStrap.Form.Label>

                      <ReactBootStrap.Form.Control
                        size="md"
                        placeholder={t("questions.26")}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </ReactBootStrap.Form.Group>
                  </ReactBootStrap.Form.Row>

                  <h4 className="header_question">{t("questions.37")}</h4>
                  <ReactBootStrap.Form.Row>
                    <ReactBootStrap.Form.Group
                      as={ReactBootStrap.Col}
                      controlId="Beleuchtung"
                    >
                      <ReactBootStrap.Form.Label>
                        {t("questions.42")}
                        <br />
                        {t("questions.42_1")}
                      </ReactBootStrap.Form.Label>
                      <div>
                        <ReactBootStrap.Form.Control
                          size="md"
                          as="select"
                          onChange={(e) => setLight(e.target.value)}
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </ReactBootStrap.Form.Control>
                      </div>
                    </ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.Group
                      as={ReactBootStrap.Col}
                      controlId="Verkehrsbindung"
                    >
                      <ReactBootStrap.Form.Label>
                        {t("questions.43")} <br /> {t("questions.43_1")}
                      </ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control
                        size="md"
                        as="select"
                        onChange={(e) => setPublicTraffic(e.target.value)}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </ReactBootStrap.Form.Control>
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Form.Group
                      as={ReactBootStrap.Col}
                      controlId="exampleForm.ControlSelect1"
                    >
                      <ReactBootStrap.Form.Label>
                        {t("questions.44")} <br /> {t("questions.44_1")}
                      </ReactBootStrap.Form.Label>
                      <ReactBootStrap.Form.Control
                        size="md"
                        as="select"
                        onChange={(e) => setPeople(e.target.value)}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </ReactBootStrap.Form.Control>
                    </ReactBootStrap.Form.Group>
                  </ReactBootStrap.Form.Row>

                  <ReactBootStrap.Form.Group controlId="1">
                    <ReactBootStrap.Form.Label>
                      {t("questions.5")}
                    </ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control
                      size="md"
                      as="textarea"
                      placeholder={t("questions.14")}
                      style={{ height: "150px" }}
                      onChange={(e) => setCircumstancesWhat(e.target.value)}
                    />
                  </ReactBootStrap.Form.Group>

                  <h4 className="header_question">{t("questions.37_1")}</h4>
                  <ReactBootStrap.Form.Row>
                    <ReactBootStrap.Form.Group
                      as={ReactBootStrap.Col}
                      controlId="formGridState"
                    >
                      <ReactBootStrap.Form.Label>
                        {t("questions.7")}
                      </ReactBootStrap.Form.Label>
                      <p>{t("questions.7_1")}</p>
                      <ReactBootStrap.Form.Control
                        size="md"
                        as="select"
                        multiple
                        style={{ height: "267px" }}
                        defaultValue={t("questions.16")}
                        onChange={(e) => handleSelect(e.target.selectedOptions)}
                      >
                        <option>{t("questions.20")}</option>
                        <option>{t("questions.22")}</option>
                        <option>{t("questions.19")}</option>
                        <option>{t("questions.21")}</option>

                        <option>{t("questions.24_2")}</option>
                        <option>{t("questions.24_1")}</option>
                        <option>{t("questions.24_3")}</option>

                        <option>{t("questions.25_1")}</option>

                        <option>{t("questions.24")}</option>
                        <option>{t("questions.23")}</option>
                        <option>{t("questions.25")}</option>
                      </ReactBootStrap.Form.Control>
                    </ReactBootStrap.Form.Group>
                  </ReactBootStrap.Form.Row>
                  <ReactBootStrap.Form.Group controlId="1">
                    <ReactBootStrap.Form.Label>
                      {t("questions.8")}
                    </ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control
                      size="md"
                      as="textarea"
                      placeholder={t("questions.17")}
                      style={{ height: "150px" }}
                      onChange={(e) => setCircumstancesWhat(e.target.value)}
                    />
                  </ReactBootStrap.Form.Group>

                  <div style={{ marginBottom: "10px" }}>
                    {t("questions.30")}
                  </div>
                  <ReactBootStrap.Form.Group
                    as={ReactBootStrap.Col}
                    controlId="formHorizontalCheck"
                  >
                    <ReactBootStrap.Form.Check
                      label={t("questions.31")}
                      onChange={(e) => setYes(e.target.value)}
                    />
                  </ReactBootStrap.Form.Group>

                  <ReactBootStrap.Form.Group
                    as={ReactBootStrap.Col}
                    controlId="formHorizontalCheck"
                  >
                    <ReactBootStrap.Form.Check
                      label={t("questions.32")}
                      onChange={(e) => setNo(e.target.value)}
                    />
                  </ReactBootStrap.Form.Group>

                  <ReactBootStrap.Form.Group controlId="1">
                    <ReactBootStrap.Form.Label>
                      {t("questions.33")}
                    </ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control
                      size="md"
                      as="textarea"
                      placeholder={t("questions.34")}
                      style={{ height: "150px" }}
                      onChange={(e) => setReport(e.target.value)}
                    />
                  </ReactBootStrap.Form.Group>

                  <ReactBootStrap.Form.Group controlId="WieHastDuDichGefühlt">
                    <ReactBootStrap.Form.Label>
                      {t("questions.28")}
                    </ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Label>
                      <div className="question_text">{t("questions.29_1")}</div>
                    </ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control
                      size="md"
                      as="textarea"
                      placeholder={t("questions.29")}
                      style={{ height: "150px" }}
                      onChange={(e) => setFeel(e.target.value)}
                    />
                  </ReactBootStrap.Form.Group>

                  <ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.Check
                      onClick={() => setCheckbox(!checkbox)}
                      required
                      name="terms"
                      label={t("questions.45")}
                      onChange={handleChange}
                      isInvalid={!!errors.terms}
                      feedback={errors.terms}
                      id="validationFormik0"
                    />
                  </ReactBootStrap.Form.Group>
                  <ReactBootStrap.Button
                    onClick={() => (checkbox ? fetchSurvery() : undefined)}
                    size="md"
                    variant="primary"
                    type="submit"
                  >
                    {t("questions.18")}
                  </ReactBootStrap.Button>
                </ReactBootStrap.Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Questions;
