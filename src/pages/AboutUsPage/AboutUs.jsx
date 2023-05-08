import React from "react";
import { Experts, Hero, MarketAndTraders } from "../../containers/AboutUsPage";
import about from "../../assets/about.png";
import { Farmers, Subscribe } from "../../containers/LandingPage";
import creative from "../../assets/creative.svg";
import tractor from "../../assets/tractor.svg";
import building from "../../assets/building.svg";

const AboutUs = () => {
  const heroSection = {
    heading: "About Us",
    img: creative,
  };
  const sectionApi = {
    bgImg: about,
    title: "About Us",
    heading1: "We do Creative",
    heading2: "Things for Success",
    txt: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    data: [
      {
        id: 1,
        img: tractor,
        heading: "Modern Agriculture Equipment",
      },
      {
        id: 2,
        img: building,
        heading: "Hormones are used",
      },
    ],
    btn: "Explore More",
  };
  return (
    <>
      <Hero heroSection={heroSection} />
      <Farmers sectionApi={sectionApi} ifExists />
      <MarketAndTraders />
      <Experts />
      {/* <Offer/> */}
      <Subscribe />
    </>
  );
};

export default AboutUs;
