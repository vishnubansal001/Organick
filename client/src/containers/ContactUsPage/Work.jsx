import React from "react";
import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import twitter from "../../assets/twitter.png";
import pint from "../../assets/pint.png";
import msgs from "../../assets/msgs.png";
import calls from "../../assets/calls.png";
import work from "../../assets/work.png";

const Work = () => {
  return (
    <>
      <section className="flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10 bg-[#F9F8F8]">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div className="flex items-center lg:flex-row flex-col lg:w-[80%] w-[90%] justify-center lg:gap-16 md:gap-12 gap-10">
            <div>
              <img src={work} alt="" className="" />
            </div>
            <div className="lg:w-[70%] flex flex-col justify-center items-start lg:gap-3 md:gap-6">
              <h1 className="text-[#274C5B] font-bold lg:text-2xl md:text-xl text-lg">
                We'd love to talk about how we can work together.
              </h1>
              <p className="font-normal text-[#525C60] lg:text-lg md:text-base text-sm">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="grid lg:grid-cols-1 md:grid-cols-2 lg:items-start lg:justify-start md:items-center md:justify-center gap-3">
                <div className="flex flex-row p-4 bg-white rounded-[14px] shadow-md hover:shadow-xl transition duration-300 ease-in-out justify-center items-start gap-3">
                  <div>
                    <img src={msgs} alt="" className="w-[5rem]" />
                  </div>
                  <div>
                    <h1 className="text-[#274C5B] font-bold lg:text-xl md:text-lg text-base">
                      Message
                    </h1>
                    <p className="font-normal text-[#525C60] md:text-base text-sm">
                      support@organic.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-row p-4 bg-white rounded-[14px] shadow-md hover:shadow-xl transition duration-300 ease-in-out justify-start items-start gap-3">
                  <div>
                    <img src={calls} alt="" className="w-[5rem]" />
                  </div>
                  <div>
                    <h1 className="text-[#274C5B] font-bold lg:text-xl md:text-lg text-base">
                      Contact Us
                    </h1>
                    <p className="font-normal text-[#525C60] md:text-base text-sm">
                      +01 123 456 789
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row lg:items-start lg:justify-start items-center justify-center gap-5">
                <img
                  src={insta}
                  alt=""
                  className="p-3 bg-[#EFF6F1] rounded-full cursor-pointer shadow-md hover:shadow-xl transition ease-in-out duration-300 "
                />
                <img
                  src={face}
                  alt=""
                  className="p-3 bg-[#EFF6F1] rounded-full cursor-pointer shadow-md hover:shadow-xl transition ease-in-out duration-300 "
                />
                <img
                  src={twitter}
                  alt=""
                  className="p-3 bg-[#EFF6F1] rounded-full cursor-pointer shadow-md hover:shadow-xl transition ease-in-out duration-300 "
                />
                <img
                  src={pint}
                  alt=""
                  className="p-3 bg-[#EFF6F1] rounded-full cursor-pointer shadow-md hover:shadow-xl transition ease-in-out duration-300 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
