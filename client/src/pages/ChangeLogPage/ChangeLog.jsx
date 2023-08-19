import React from 'react'
import { Hero } from '../../containers/AboutUsPage';
import protecte from '../../assets/protected.png';
import { Subscribe } from '../../containers/LandingPage';
import HeroSection from '../../containers/ChangeLogPage/HeroSection';

const ChangeLog = () => {
    const heroSection = {
        img:protecte,
        heading:"Changelog"
    };
  return (
    <>
      <Hero heroSection={heroSection} ifExists/>
      <HeroSection/>
      <Subscribe/>
    </>
  )
}

export default ChangeLog
