import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Contact from "./components/views/contact/Contact";
import DataPrivacy from "./components/views/dataPrivacy/dataPrivacy";
import Home from "./components/views/home/home";
import NeedHelp from "./components/views/needHelp/needHelp";

function App() {
  useEffect(() => {
    document.title = "Be Brave - Together Against Sexual Harassment";
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/datenschutz" exact element={<DataPrivacy />} />
          <Route path="/kontakt" exact element={<Contact />} />
          <Route path="/hilfe" exact element={<NeedHelp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
