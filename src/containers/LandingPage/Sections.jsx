import React from "react";
import cookis from "../../assets/cookis.svg";
import food from "../../assets/food.svg";
import juice from "../../assets/juice.svg";

const Sections = () => {
  const section = [
    {
      id: 1,
      img: juice,
      btn: "Organic Juice",
    },
    {
      id: 2,
      img: food,
      btn: "Organic Food",
    },
    {
      id: 3,
      img: cookis,
      btn: "Nuts Cookis",
    },
  ];
  return (
    <>
      <section className="flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10 bg-[#F1F8F4]">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[95%] w-[90%] justify-center lg:gap-8 md:gap-6 gap-4">
            {section?.map((item) => (
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.img})` }}
                className="bg-cover bg-center w-full flex items-center justify-center h-[20rem]"
              >
                <button className="px-8 py-4 font-semibold text-[#274C5B] bg-white rounded-[14px] shadow-md hover:shadow-xl transition ease-in-out duration-300">
                  {item.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
