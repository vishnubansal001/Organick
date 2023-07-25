import React from "react";
import { useNavigate } from "react-router-dom";
import { products1 } from "../../database/data";

const RelatedProducts = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-[#F9F8F8]">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8">
            <div className="flex flex-col items-center justify-center gap-1 w-[90%] mx-auto">
              <h1 className="font-bold text-[#274C5B] lg:text-7xl md:text-5xl text-3xl">
                Related Products
              </h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-4 gap-3">
              {products1?.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate("/shop-single")}
                  className="bg-white p-6 rounded-[20px] shadow-lg hover:shadow-2xl transition ease-in-out duration-300 cursor-pointer flex flex-col justify-center gap-2"
                >
                  <div className="cursor-pointer">
                    <button className="text-white bg-[#274C5B] py-1 px-2 rounded-[10px]">
                      {item.btn}
                    </button>
                  </div>
                  <div className="flex flex-col gap-2 justify-center pb-3 border-b-2">
                    <img src={item.img} alt="" />
                    <p className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                      {item.txt}
                    </p>
                  </div>
                  <div className="flex md:flex-row lg:justify-between justify-center items-center gap-3">
                    <div className="flex justify-center items-center gap-1">
                      <p className="text-[#B8B8B8] text-sm font-semibold line-through">
                        {item.pCost}
                      </p>
                      <p className="text-[#274C5B] text-base font-bold">
                        {item.cost}
                      </p>
                    </div>
                    <div>
                      <img src={item.img1} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedProducts;
