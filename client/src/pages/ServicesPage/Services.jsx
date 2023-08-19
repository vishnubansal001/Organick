import React from "react";
import { Hero } from "../../containers/AboutUsPage";
import services from "../../assets/services.png";
import { EveryDay, Future } from "../../containers/ServicesPage";

const Services = () => {
  const heroSection = {
    heading: "Services",
    img: services,
  };
  return (
    <>
      <Hero heroSection={heroSection} />
      <Future/>
      <EveryDay/>
    </>
  );
};

export default Services;
