import React from "react";
import broccoli from "../../assets/broccoli.svg";
import banana from "../../assets/banana.svg";
import nuts from "../../assets/nuts.svg";
import tomato from "../../assets/tomato.svg";
import bean from "../../assets/bean.svg";
import hazelnut from "../../assets/hazelnut.svg";
import egg from "../../assets/egg.svg";
import rusk from "../../assets/rusk.svg";
import star from "../../assets/star.svg";

const Products = () => {
  const products = [
    {
      id: 1,
      btn: "Vegetable",
      img: broccoli,
      txt: "Calabrese Broccoli",
      pCost: "$20.00",
      cost: "$13.00",
      img1: star,
    },
    {
      id: 2,
      btn: "Fresh",
      img: banana,
      txt: "Fresh Banana Fruites",
      pCost: "$20.00",
      cost: "$14.00",
      img1: star,
    },
    {
      id: 3,
      btn: "Millets",
      img: nuts,
      txt: "White Nuts",
      pCost: "$20.00",
      cost: "$15.00",
      img1: star,
    },
    {
      id: 4,
      btn: "Vegetable",
      img: tomato,
      txt: "Vegan Red Tomato",
      pCost: "$20.00",
      cost: "$17.00",
      img1: star,
    },
    {
      id: 5,
      btn: "Health",
      img: bean,
      txt: "Mung Bean",
      pCost: "$20.00",
      cost: "$11.00",
      img1: star,
    },
    {
      id: 6,
      btn: "Nuts",
      img: hazelnut,
      txt: "Brown Hazelnut",
      pCost: "$20.00",
      cost: "$12.00",
      img1: star,
    },
    {
      id: 7,
      btn: "Fresh",
      img: egg,
      txt: "Eggs",
      pCost: "$20.00",
      cost: "$17.00",
      img1: star,
    },
    {
      id: 8,
      btn: "Fresh",
      img: rusk,
      txt: "Zelco Suji Elaichi Rusk",
      pCost: "$20.00",
      cost: "$15.00",
      img1: star,
    },
  ];
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-[#F9F8F8]">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8">
            <div className="flex flex-col items-center justify-center gap-1 w-[90%] mx-auto">
              <p className="font-semibold text-[#7EB693] lg:text-3xl md:text-2xl text-xl italic">
                Categories
              </p>
              <h1 className="font-bold text-[#274C5B] lg:text-7xl md:text-5xl text-3xl">
                Our Products
              </h1>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-6 md:gap-4 gap-3">
              {products?.map((item) => (
                <div
                  key={item.id}
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
            <div className="flex justify-center items-center">
              <button className="bg-[#274C5B] text-white lg:text-xl md:text-lg text-base font-bold py-3 px-5 rounded-[14px] hover:scale-[1.05] transition ease-in-out duration-300 shadow-lg hover:shadow-xl">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
