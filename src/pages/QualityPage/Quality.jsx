import React from 'react'
import { Hero } from '../../containers/AboutUsPage';
import qty from '../../assets/qty.png';
import { Subscribe } from '../../containers/LandingPage';
import { StoreServices } from '../../containers/QualityPage';

const Quality = () => {
    const heroSection = {
        heading: "Quality Standard",
        img:qty,
    };
  return (
    <>
      <Hero heroSection={heroSection} />
      <StoreServices/>
      <Subscribe/>
    </>
  )
}

export default Quality
