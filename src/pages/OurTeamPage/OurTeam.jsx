import React from "react";
import { Hero } from "../../containers/AboutUsPage";
import team from "../../assets/team.png";
import { Subscribe } from "../../containers/LandingPage";
import { Experts } from "../../containers/OurTeamPage";

const OurTeam = () => {
  const heroSection = {
    img: team,
    heading: "Our team",
  };
  return (
    <>
      <Hero heroSection={heroSection} />
      <Experts/>
      <Subscribe/>
    </>
  );
};

export default OurTeam;
