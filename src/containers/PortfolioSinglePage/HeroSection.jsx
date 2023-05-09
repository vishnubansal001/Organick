import React from "react";
import bgImg from "../../assets/blackberry1.png";

const HeroSection = () => {
  return (
    <>
      <section
        className="bg-center bg-cover flex select-none items-center justify-center min-h-[70vh] h-full relative"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex justify-end items-end mx-auto">
          <div className="flex flex-col items-end justify-end w-[90%] mx-auto lg:gap-16 md:gap-14 gap-12"></div>
        </div>
      </section>
      <div className="flex md:flex-row flex-col lg:justify-between justify-center items-center gap-10 w-[90%] mx-auto bg-white rounded-[20px] p-10 md:mt-[-6rem] mt-[-15rem] shadow-md mb-5 relative">
        <div className="flex flex-col items-start justify-center gap-4 md:w-[50%]">
          <h1 className="font-bold text-[#274C5B] lg:text-3xl md:text-2xl text-lg">
            Black Raspberry
          </h1>
          <p className="font-normal text-[#525C60] md:text-base text-sm">
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has more-or-less normal distribution of letters, as
            opposed
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-3 md:w-[30%] gap-2">
          <p className="text-[#274C5B] font-semibold">Date</p>
          <p className="text-[#274C5B] font-semibold">:</p>
          <p className="md:col-span-2 text-[#525C60]">December 4,2022</p>
          <p className="text-[#274C5B] font-semibold">Client</p>
          <p className="text-[#274C5B] font-semibold">:</p>
          <p className="md:col-span-2 text-[#525C60]">Kevin Martin</p>
          <p className="text-[#274C5B] font-semibold">Category</p>
          <p className="text-[#274C5B] font-semibold">:</p>
          <p className="md:col-span-2 text-[#525C60]">Agriculture , Eco</p>
          <p className="text-[#274C5B] font-semibold">Service</p>
          <p className="text-[#274C5B] font-semibold">:</p>
          <p className="md:col-span-2 text-[#525C60]">Organic Products</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
