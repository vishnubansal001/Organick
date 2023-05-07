import React from 'react';
import { Farmers, Flex1, Hero, Products,Customer, Offer } from '../../containers/LandingPage';
// import Customer from '../../containers/LandingPage/customer';


const LandingPage = () => {
  return (
    <>
      <Hero/>
      <Flex1/>
      <Farmers/>
      <Products/>
      {/* <Customer/> */}
      <Offer/>
    </>
  )
}

export default LandingPage
