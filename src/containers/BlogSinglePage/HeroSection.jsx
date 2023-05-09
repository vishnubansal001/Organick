import React from "react";
import bgImg from "../../assets/research2.png";
import user from "../../assets/user.png";

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
      <div className="flex md:flex-row flex-col justify-center items-center gap-10 w-[90%] mx-auto bg-white rounded-[20px] p-10 md:mt-[-6rem] mt-[-15rem] shadow-md mb-5 relative">
        <div className="flex flex-col items-start justify-center gap-4">
          <div className="flex md:flex-row flex-col gap-4">
            <p className="text-[#274C5B] lg:text-lg md:text-base text-sm">
              <span className="font-semibold">Posted on:{" "}</span>Jan 6,2022
            </p>
            <p className="flex flex-row gap-2 lg:text-lg text-[#274C5B] md:text-base text-sm">
              <img src={user} alt="" />
              By Richi Card
            </p>
          </div>
          <h1 className="font-bold text-[#274C5B] lg:text-3xl md:text-2xl text-lg">
            Research More Organic Food
          </h1>
          <p className="font-normal text-[#525C60] md:text-base text-sm">
            Established fact that a reader will be distracted by the readable
            content of a page when looking a layout. The point of using Lorem
            Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
