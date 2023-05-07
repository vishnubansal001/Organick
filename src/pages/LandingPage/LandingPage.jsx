import React from 'react';
import { Farmers, Flex1, Hero, Products,Customer, Offer, Store, Sections, Discover } from '../../containers/LandingPage';

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
    </>
  )
}

export default LandingPage
