import React from "react";
import { Hero } from "../../containers/AboutUsPage";
import protecte from "../../assets/protected.png";
import { Subscribe } from "../../containers/LandingPage";
import { HeroSec } from "../../containers/LicencesPage";

const Licenses = () => {
  const heroSection = {
    heading: "Licences",
    img: protecte,
  };
  return (
    <>
      <Hero heroSection={heroSection} />
      <HeroSec/>
      <Subscribe/>
    </>
  );
};

export default Licenses;
