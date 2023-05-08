import React from "react";
import { Hero } from "../../containers/AboutUsPage";
import shop from '../../assets/shop.svg';
import { Subscribe } from "../../containers/LandingPage";
import { Products } from "../../containers/Shop";

const Shop = () => {
  const heroSection = {
    heading: "Shop",
    img: shop,
  };
  return (
    <>
      <Hero heroSection={heroSection} />
      <Products/>
      <Subscribe/>
    </>
  );
};

export default Shop;
