import React from "react";
import { Hero } from "../../containers/AboutUsPage";
import protecte from '../../assets/protected.png';
import { Subscribe } from "../../containers/LandingPage";
import { InputBox } from "../../containers/ProtectedPage";

const Protected = () => {
  const heroSection = {
    img: protecte,
    heading: "Protected Page",
  };
  return (
    <>
      <Hero heroSection={heroSection} ifExists/>
      <InputBox/>
      <Subscribe/>
    </>
  );
};

export default Protected;
