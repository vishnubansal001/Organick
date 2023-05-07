import React from 'react';
import { Farmers, Flex1, Hero, Products,Customer, Offer, Store, Sections, Discover, Subscribe } from '../../containers/LandingPage';

const LandingPage = () => {
  return (
    <>
      <Hero/>
      <Flex1/>
      <Farmers/>
      <Products/>
      {/* <Customer/> */}
      <Offer/>
      <Store/>
      <Sections/>
      <Discover/>
      <Subscribe/>
    </>
  )
}

export default LandingPage
