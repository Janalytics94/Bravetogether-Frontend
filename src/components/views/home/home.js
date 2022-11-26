import React from "react";

import HeroSection from "../../heroSection/HeroSection";
import Idea from "../../Idea/Idea";
import Help from "../../Help/Help";
import Footer from "../../Footer/Footer";
import AboutMe from "../../AboutMe/AboutMe";
import Questions from "../../Questions/Questions";

import "./home.scss";

import useWindowDimensions from "../../WindowSize/WindowSize";

import Plx from "react-plx";
import BeBoldCircle from "../../BeBoldCircle/BeBoldCircle";

const exampleParallaxData = [
  {
    start: 100,
    end: 0,
    properties: [
      {
        startValue: 0,
        endValue: 0,
        property: "translateY",
      },
    ],
  },
];

const imgDown = [
  {
    start: 0,
    end: 1100,
    properties: [
      {
        startValue: 0,
        endValue: 1100,
        property: "translateY",
      },
    ],
  },
  // {
  //     start: 1000,
  //     end: 1900,
  //     properties: [
  //         {
  //             startValue: -100,
  //             endValue: 1000,
  //             property: "translateY"
  //         }
  //     ]
  //
  // }
];

const Home = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const Dimension = useWindowDimensions();

  return (
    <div>
      {Dimension.width <= 600 ? (
        <div className="home_mobile">
          <HeroSection />
          <Idea />
          <AboutMe />
          <Help />
          <div id="experience" style={{ marginTop: "0px" }}></div>
        </div>
      ) : (
        <div className="no_home_mobile">
          <Plx parallaxData={imgDown}>
            <HeroSection />
          </Plx>

          <BeBoldCircle />

          <Plx parallaxData={exampleParallaxData}>
            <div style={{ backgroundColor: "white", height: "100px" }}>
              <Idea />
              <AboutMe />
              <Help />
              <div id="experience"></div>
            </div>
            <div style={{ marginTop: "1350px" }}></div>
          </Plx>
        </div>
      )}

      <Questions />

      <Footer />
    </div>
  );
};

export default Home;
