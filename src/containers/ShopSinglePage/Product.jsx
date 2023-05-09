import React, { useState } from "react";
import img from "../../assets/nuts.png";
import star from "../../assets/star.png";

const Product = () => {
  const [qty, setQty] = useState(0);
  const onclick = () => {
    setQty(qty + 1);
  };
  return (
    <>
      <section className="flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10 bg-[#F9F8F8]">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div className="flex items-center lg:flex-row flex-col lg:w-[60%] w-[90%] justify-center lg:gap-8 md:gap-6 gap-4 bg-white rounded-[20px] p-6 shadow-md">
            <div className="lg:w-[50%] flex flex-col justify-start items-start">
              <button className="text-white bg-[#274C5B] py-1 px-2 rounded-[10px] w-auto">
                Millets
              </button>
              <img src={img} alt="" />
            </div>
            <div className="lg:w-[60%] flex flex-col justify-start place-items-start">
              <div className="gap-3 flex flex-col justify-start place-items-start">
                <div className="grid gap-1">
                  <h1 className="text-[#274C5B] font-bold lg:text-2xl md:text-xl text-lg">
                    Health Pistachios
                  </h1>
                  <img src={star} alt="" />
                  <div className="flex justify-start items-center gap-1">
                    <p className="text-[#B8B8B8] text-sm font-semibold line-through">
                      $20.00
                    </p>
                    <p className="text-[#274C5B] text-base font-bold">$13.00</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#525C60] lg:text-lg md:text-base text-sm">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-2">
                  <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                    Quantity:
                  </p>
                  <button
                    className="px-2 py-2 bg-transparent border-2 border-[#274C5B] rounded-[14px]"
                    disabled
                  >
                    {qty}
                  </button>
                  <button className="text-white bg-[#274C5B] px-4 py-2 rounded-[10px] font-semibold" onClick={onclick}>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
