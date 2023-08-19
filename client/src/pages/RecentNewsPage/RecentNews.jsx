import React from "react";
import { Hero } from "../../containers/AboutUsPage";
import recentnews from "../../assets/recentnews.png";
import { Subscribe } from "../../containers/LandingPage";
import { News } from "../../containers/RecentNews";

const RecentNews = () => {
  const heroSection = {
    img: recentnews,
    heading: "Recent News",
  };
  return (
    <>
      <Hero heroSection={heroSection} />
      <News/>
      <Subscribe/>
    </>
  );
};

export default RecentNews;
