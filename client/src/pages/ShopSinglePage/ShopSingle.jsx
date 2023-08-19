import React from "react";
import { Hero } from "../../containers/AboutUsPage";
import shopSingle from "../../assets/shopSingle.png";
import { Subscribe } from "../../containers/LandingPage";
import {
  Product,
  ProductInfo,
  RelatedProducts,
} from "../../containers/ShopSinglePage";

const ShopSingle = () => {
  const heroSection = {
    img: shopSingle,
    heading: "Shop Single",
  };
  return (
    <>
      <Hero heroSection={heroSection} />
      <Product />
      <ProductInfo />
      <RelatedProducts />
      <Subscribe />
    </>
  );
};

export default ShopSingle;
