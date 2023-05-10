import React from "react";
import mungBean from "../../assets/mungBean.png";
import Bhazelnut from "../../assets/Bhazelnut.png";
import onion from "../../assets/onion.png";
import cabbage from "../../assets/cabbage.png";
import star from "../../assets/star.png";
import { useNavigate } from "react-router-dom";

const Offer = () => {
  const navigate = useNavigate();
  const offers = [
    {
      id: 1,
      btn: "Vegetable",
      img: mungBean,
      txt: "Mung Bean",
      pCost: "$20.00",
      cost: "$11.00",
      img1: star,
    },
    {
      id: 2,
      btn: "Vegetable",
      img: Bhazelnut,
      txt: "Brown Hazelnut",
      pCost: "$20.00",
      cost: "$12.00",
      img1: star,
    },
    {
      id: 3,
      btn: "Vegetable",
      img: onion,
      txt: "Onion",
      pCost: "$20.00",
      cost: "$17.00",
      img1: star,
    },
    {
      id: 4,
      btn: "Vegetable",
      img: cabbage,
      txt: "Cabbage",
      pCost: "$20.00",
      cost: "$17.00",
      img1: star,
    },
  ];
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full bg-[#274C5B] p-3 relative">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8">
            <div className="flex md:justify-between justify-center md:flex-row flex-col gap-5 items-baseline w-full">
              <div className="flex flex-col justify-center gap-2">
                <p className="font-semibold text-[#7EB693] lg:text-3xl md:text-2xl text-xl italic">
                  Offer
                </p>
                <h1 className="font-bold text-white lg:text-4xl md:text-3xl text-2xl">
                  We Offer Organic For You
                </h1>
              </div>
              <div>
                <button
                  className="px-4 py-3 bg-[#EFD372] rounded-[14px] text-[#274C5B] font-bold lg:text-lg md:text-base text-sm shadow-md hover:scale-[1.05] transition ease-in-out duration-300 hover:shadow-lg"
                  onClick={() => navigate("/shop")}
                >
                  View All Product
                </button>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-3">
              {offers?.map((item) => (
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
                    <img src={item.img} alt="" className="h-[18rem]" />
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

export default Offer;
