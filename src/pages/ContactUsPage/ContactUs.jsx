import React from 'react';
import { Hero } from '../../containers/AboutUsPage';
import { Form, OurFarms, Work } from '../../containers/ContactUsPage';
import { Subscribe } from '../../containers/LandingPage';
import contact from '../../assets/contactUs.png';

const ContactUs = () => {
    const heroSection = {
        heading:"Contact Us",
        img:contact,
    }
  return (
    <>
      <Hero heroSection={heroSection} />
      <Work/>
      <OurFarms/>
      <Form/>
      <Subscribe/>
    </>
  )
}

export default ContactUs
