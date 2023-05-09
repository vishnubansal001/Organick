import React from "react";
import { Hero } from "../../containers/AboutUsPage";
import portfolio from "../../assets/portfolio.png";
import { Subscribe } from "../../containers/LandingPage";
import { MainSec } from "../../containers/PortfolioPage";

const Portfolio = () => {
  const heroSection = {
    heading: "Portfolio Standard",
    img: portfolio,
  };
  return (
    <>
      <Hero heroSection={heroSection} />
      <MainSec />
      <Subscribe />
    </>
  );
};

export default Portfolio;
