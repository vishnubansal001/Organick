import React from "react";

const Form = () => {
  return (
    <>
      <section className="flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div className="flex items-start flex-col w-[90%] justify-center lg:gap-8 md:gap-6 gap-4">
            <form
              action=""
              className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full"
            >
              <div className="flex flex-col justify-center gap-3">
                <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                  Full Name*
                </p>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-none border-2 border-[#7EB693] rounded-[14px] px-5 placeholder:italic placeholder:capitalize py-3 md:w-[80%] w-[90%]"
                />
              </div>
              <div className="flex flex-col justify-center gap-3">
                <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                  Your Email*
                </p>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="your email address"
                  className="outline-none border-2 border-[#7EB693] rounded-[14px] px-5 placeholder:italic placeholder:capitalize py-3 md:w-[80%] w-[90%]"
                />
              </div>
              <div className="flex flex-col justify-center gap-3">
                <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                  Company*
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="your company name"
                  className="outline-none border-2 border-[#7EB693] rounded-[14px] px-5 placeholder:italic placeholder:capitalize py-3 md:w-[80%] w-[90%]"
                />
              </div>
              <div className="flex flex-col justify-center gap-3">
                <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                  Subject*
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="how can we help"
                  className="outline-none border-2 border-[#7EB693] rounded-[14px] px-5 placeholder:italic placeholder:capitalize py-3 md:w-[80%] w-[90%]"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 md:col-span-2 w-[90%]">
                <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                  Message*
                </p>
                <textarea
                  name=""
                  id=""
                  className="col-span-2 outline-none border-2 border-[#7EB693] rounded-[14px] px-5 placeholder:italic placeholder:capitalize py-3"
                  rows="7"
                  placeholder="hello there,i would like to talk about how to..."
                ></textarea>
              </div>
            </form>
            <button className="px-6 py-3 bg-[#274C5B] text-white lg:text-xl md:text-lg text-base font-semibold rounded-[14px] hover:scale-[1.05] transition ease-in-out duration-300 shadow-lg hover:shadow-xl">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
