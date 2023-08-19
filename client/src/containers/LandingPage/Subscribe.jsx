import React from "react";
import subscribe from "../../assets/subscribe.png";

const Subscribe = () => {
  return (
    <>
      <section className="flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div
            className="flex items-center md:flex-row flex-col lg:w-[80%] w-[90%] lg:justify-between md:justify-center lg:gap-8 md:gap-6 gap-4 bg-cover bg-center rounded-[20px] lg:px-10 px-6 lg:py-16 py-10"
            style={{ backgroundImage: `url(${subscribe})` }}
          >
            <div className="flex flex-col gap-3 justify-center">
              <h1 className="font-bold text-white lg:text-4xl md:text-3xl text-2xl">
                Subscribe to
              </h1>
              <h1 className="font-bold text-white lg:text-4xl md:text-3xl text-2xl">
                our Newsletter
              </h1>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center gap-2">
              <input
                className="px-3 py-4 placeholder:text-[#ABABAB] placeholder:italic w-[100%] outline-none border-0 rounded-[14px]"
                type="email"
                placeholder="Your Email Address"
              />
              <button className="px-3 py-3 bg-[#274C5B] text-white lg:text-xl md:text-lg text-base font-semibold rounded-[14px] hover:scale-[1.05] transition ease-in-out duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
