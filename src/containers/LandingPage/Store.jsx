import React from "react";
import img from "../../assets/store.png";
import { store } from "../../database/data";

const Store = () => {
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-[#F9F8F8] background bg-cover bg-center ">
        <div className="flex items-center justify-center mx-auto lg:p-0 p-4">
          <div className="flex w-full">
            <div className="w-[50%] lg:inline-flex hidden">
              <img src={img} alt="" />
            </div>
            <div className="lg:w-[40%] items-center justify-center flex">
              <div className="bg-white p-6 lg:p-14 md:p-10 rounded-[20px] lg:ml-[-3rem] flex flex-col justify-center gap-4 shadow-md hover:shadow-xl transition ease-in-out duration-300 cursor-pointer">
                <div className="flex flex-col justify-center gap-3">
                  <p className="font-semibold text-[#7EB693] lg:text-3xl md:text-2xl text-xl italic">
                    Eco Friendly
                  </p>
                  <div className="flex flex-col justify-center gap-1">
                    <h1 className="font-bold text-[#274C5B] lg:text-4xl md:text-3xl text-2xl">
                      Econis is a Friendly
                    </h1>
                    <h1 className="font-bold text-[#274C5B] lg:text-4xl md:text-3xl text-2xl">
                      Organic Store
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-3">
                  {store?.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-center gap-1"
                    >
                      <h1 className="font-semibold text-[#274C5B] lg:text-xl md:text-lg text-base">
                        {item.heading}
                      </h1>
                      <p className="font-normal text-[#525C60] md:text-base text-sm">
                        {item.txt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
