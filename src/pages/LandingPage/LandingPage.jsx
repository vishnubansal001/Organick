import React from 'react';
import { Farmers, Flex1, Hero, Products,Customer, Offer, Store, Sections, Discover, Subscribe } from '../../containers/LandingPage';
import farmers from '../../assets/farmers.svg';
import foods from '../../assets/foods.svg';
import quality from '../../assets/quality.svg';

const LandingPage = () => {
  const sectionApi = {
    bgImg:farmers,
    title:"About Us",
    heading1:"We Believe in Working",
    heading2:"Accredited Farmers",
    txt:"Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    data:[
      {
        id: 1,
        img: foods,
        heading: "Organic Foods Only",
        txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      },
      {
        id: 2,
        img: quality,
        heading: "Quality Standards",
        txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      },
    ],
    btn:"Shop Now",
  }
  return (
    <>
      <Hero/>
      <Flex1/>
      <Farmers sectionApi={sectionApi}/>
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
