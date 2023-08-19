import React from "react";
import inputbox from "../../assets/inputbox.png";

const InputBox = () => {
  return (
    <>
      <section className="flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div className="flex items-center lg:w-auto md:w-auto w-[90%] mx-auto md:flex-row flex-col bg-gray-100 px-5 py-6 rounded-[20px] shadow-md hover:shadow-xl transition duration-300 ease-in-out justify-center lg:gap-8 md:gap-6 gap-4">
            <div>
              <img src={inputbox} alt="" />
            </div>
            <div className="flex flex-col lg:gap-7 md:gap-5 gap-4 w-[70%]">
              <p className="text-[#274C5B] font-bold lg:text-xl md:text-lg text-base">
                Password:
              </p>
              <input
                type="password"
                className="w-full outline-none border-2 border-[#7EB693] placeholder:italic placeholder:text-[#ABABAB] px-2 rounded-[14px] py-3 transition duration-300 ease-in-out"
                placeholder="Enter Your Password"
              />
              <button className="w-[70%] px-3 py-3 bg-[#274C5B] text-white lg:text-lg md:text-base text-sm font-semibold rounded-[14px] hover:scale-[1.05] transition ease-in-out duration-300 shadow-lg hover:shadow-xl">
                Send Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InputBox;
