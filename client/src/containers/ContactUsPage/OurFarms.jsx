import React from "react";
import farms from "../../assets/farms.png";
import location from "../../assets/location.png";

const OurFarms = () => {
  return (
    <>
      <section className="flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10 bg-cover bg-center">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div
            className="flex lg:items-end justify-center items-center w-[90%] lg:justify-end lg:gap-8 md:gap-6 gap-4 bg-cover bg-center lg:p-10 md:p-6 p-4 rounded-[30px]"
            style={{ backgroundImage: `url(${farms})` }}
          >
            <div className="bg-white p-5 rounded-[20px] lg:w-[40%] md:w-[60%] flex flex-col justify-center items-start gap-3">
              <p className="font-semibold text-[#7EB693] lg:text-2xl md:text-xl text-lg italic">
                Location
              </p>
              <h1 className="font-bold text-[#274C5B] lg:text-4xl md:text-3xl text-2xl">
                Our Farms
              </h1>
              <p className="font-normal text-[#525C60] md:text-base text-sm">
                Established fact that a reader will be distracted by the
                readable content of a page when looking a layout. The point of
                using.
              </p>
              <div className="flex md:flex-row flex-col justify-start gap-2 items-start">
                <img src={location} alt="" />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-[#525C60] font-bold lg:text-lg md:text-base text-sm">
                    New York, USA:
                  </h1>
                  <p className="text-[#525C60] md:text-base text-sm">
                    299 Park Avenue New York,
                  </p>
                  <p className="text-[#525C60] md:text-base text-sm">
                    New York 10171
                  </p>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-start gap-2 items-start">
                <img src={location} alt="" />
                <div className="flex flex-col justify-center items-start gap-1">
                  <h1 className="text-[#525C60] font-bold lg:text-lg md:text-base text-sm">
                    London, UK:
                  </h1>
                  <p className="text-[#525C60] md:text-base text-sm">
                    30 Stamford Street,
                  </p>
                  <p className="text-[#525C60] md:text-base text-sm">
                    London SE1 9LQ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFarms;
