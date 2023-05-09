import React from "react";
import video from "../../assets/video.svg";
import everyDay from "../../assets/dayevery.png";

const EveryDay = () => {
  return (
    <>
      <section
        className="bg-cover bg-center flex select-none min-h-screen h-full p-3 relative"
        style={{ backgroundImage: `url(${everyDay})` }}
      >
        <div className="flex text-center justify-center mx-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col justify-start items-center gap-5">
            <p className="font-semibold text-[#7EB693] lg:text-2xl md:text-xl text-lg italic">
              Organic Only
            </p>
            <h1 className="font-bold text-[#274C5B] lg:text-5xl md:text-3xl text-2xl">
              Every Fresh & Clean
            </h1>
            <p className="text-[#525C60] lg:text-lg md:text-base text-sm lg:w-[70%]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the{" "}
            </p>
            <div className="shadow-md hover:shadow-xl cursor-pointer select-none p-5 transition duration-300 ease-in-out bg-[#7EB693] rounded-full">
              <img src={video} alt="" className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EveryDay;
