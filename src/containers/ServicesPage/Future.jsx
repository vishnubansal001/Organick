import React from "react";
import { useNavigate } from "react-router-dom";
import { benefits1, benefits2 } from "../../database/data";
import almondsImg from "../../assets/almondsImg.png";

const Future = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-[#F9F8F8]">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-16 md:gap-14 gap-10">
            <div className="flex flex-col items-center justify-center gap-1 w-[90%] mx-auto text-center">
              <p className="font-semibold text-[#7EB693] lg:text-3xl md:text-2xl text-xl italic">
                What we grow
              </p>
              <h1 className="font-bold text-[#274C5B] lg:text-6xl md:text-4xl text-2xl">
                Better Agriculture for
              </h1>
              <h1 className="font-bold text-[#274C5B] lg:text-6xl md:text-4xl text-2xl">
                Better Future
              </h1>
            </div>
            src/containers/LandingPage/Farmers.jsx{" "}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[90%] mx-auto gap-5 items-center justify-center">
              <div className="flex flex-col justify-center items-end gap-4">
                {benefits1?.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-end text-end gap-2"
                  >
                    <img src={item.img} alt="" />
                    <h1 className="font-semibold text-[#274C5B] lg:text-xl md:text-lg text-base">
                      {item.heading}
                    </h1>
                    <p className="text-[#525C60] font-normal lg:text-base text-sm md:leading-3 leading-5">
                      {item.txt}
                    </p>
                  </div>
                ))}
              </div>
              <div className="">
                <img src={almondsImg} alt="" />
              </div>
              <div className="flex flex-col justify-center items-end gap-4">
                {benefits2?.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-center items-start gap-2"
                  >
                    <img src={item.img} alt="" />
                    <h1 className="font-semibold text-[#274C5B] lg:text-xl md:text-lg text-base">
                      {item.heading}
                    </h1>
                    <p className="text-[#525C60] font-normal lg:text-base text-sm md:leading-3 leading-5">
                      {item.txt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <button
                className="px-5 transition shadow-md hover:shadow-xl ease-in-out duration-300 py-3 bg-transparent border-2 border-[#274C5B] font-bold lg:text-lg md:text-base text-sm text-[#274C5B] rounded-[14px]"
                onClick={() => navigate("/quality")}
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Future;
