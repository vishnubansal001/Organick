import React, { useState } from "react";

const ProductInfo = () => {
  const [clicked, setClicked] = useState(false);
  const onclick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <section className="flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div className="flex items-center text-center flex-col w-[90%] justify-center lg:gap-8 md:gap-6 gap-4">
            <div className="flex md:flex-row flex-col justify-center items-center lg:gap-5 gap-7">
              <button
                className={`py-3 px-6 font-bold lg:text-2xl md:text-xl text-lg  rounded-[20px] shadow-md hover:shadow-xl cursor-pointer transition duration-300 ease-in-out hover:scale-[1.05] ${
                  clicked
                    ? "bg-[#274C5B] text-white"
                    : "bg-[#EFF6F1] text-[#274C5B]"
                }`}
                onClick={onclick}
              >
                Product Description
              </button>
              <button
                className={`py-3 px-6 font-bold lg:text-2xl md:text-xl text-lg rounded-[20px] shadow-md hover:shadow-xl cursor-pointer transition duration-300 ease-in-out hover:scale-[1.05] ${
                  !clicked
                    ? "bg-[#274C5B] text-white"
                    : "bg-[#EFF6F1] text-[#274C5B]"
                } `}
                onClick={onclick}
              >
                Product Info
              </button>
            </div>
            <div>
              <p
                className={`text-[#525C60] lg:text-lg md:text-base text-sm leading-5 ${
                  clicked ? "block" : "hidden"
                }`}
              >
                Welcome to the world of natural and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health, ecology, and care. We aim to give our customers a
                healthy chemical-free meal for perfect nutrition. It offers
                about 8-10% carbs. Simple sugars — such as glucose and fructose
                — make up 70% and 80% of the carbs in raw. Content of the
                product description
              </p>
              <p
                className={`text-[#525C60] lg:text-lg md:text-base text-sm leading-5 ${
                  !clicked ? "block" : "hidden"
                }`}
              >
                Welcome to the world of natural and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health, ecology, and care. We aim to give our customers a
                healthy chemical-free meal for perfect nutrition. It offers
                about 8-10% carbs. Simple sugars — such as glucose and fructose
                — make up 70% and 80% of the carbs in raw. content of the
                product info
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductInfo;
