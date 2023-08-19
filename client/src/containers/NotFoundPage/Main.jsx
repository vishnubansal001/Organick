import React from "react";
import page from "../../assets/page.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="bg-cover bg-center lg:justify-start lg:items-start items-center justify-center flex select-none min-h-screen h-full p-3 relative"
        style={{ backgroundImage: `url(${page})` }}
      >
        <div className="flex p-4 sm:p-6 lg:p-8 w-[90%] mx-auto">
          <div className="flex flex-col lg:justify-start items-center justify-center lg:items-end w-full">
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <p className="text-[#8FA8A8] lg:text-[10rem] md:text-[7rem] text-[4rem] font-bold">
                404
              </p>
              <h1 className="font-bold text-[#274C5B] lg:text-5xl md:text-3xl text-2xl">
                Page not found
              </h1>
              <p className="font-normal text-[#525C60] md:text-base text-sm mb-6">
                The page you are looking for doesn't exist or has been moved
              </p>
              <button
                className="bg-[#274C5B] text-white lg:text-xl md:text-lg text-base font-bold py-3 px-5 rounded-[14px] hover:scale-[1.05] transition ease-in-out duration-300 shadow-lg hover:shadow-xl"
                onClick={() => navigate("/")}
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
