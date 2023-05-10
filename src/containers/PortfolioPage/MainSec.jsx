import React from "react";
import leaf from "../../assets/leaf.png";
import lemon from "../../assets/lemon.png";
import orange from "../../assets/orange.png";
import tommato from "../../assets/tommato.png";
import carrot from "../../assets/carrot.png";
import raspberry from "../../assets/raspberry.png";
import { useNavigate } from "react-router-dom";

const MainSec = () => {
  const navigate = useNavigate();
  const sections = [
    {
      id: 1,
      img: lemon,
      arrow: ">",
      name: "Green & Tasty Lemon",
      txt: "Fruits",
    },
    {
      id: 2,
      img: carrot,
      arrow: ">",
      name: "Organic Carrot",
      txt: "Farmer",
    },
    {
      id: 3,
      img: leaf,
      arrow: ">",
      name: "Organic Betel Leaf",
      txt: "Leaf",
    },
    {
      id: 4,
      img: tommato,
      arrow: ">",
      name: "Natural Tommato",
      txt: "Fruits",
    },
    {
      id: 5,
      img: raspberry,
      arrow: ">",
      name: "Black Raspberry",
      txt: "Farmer",
    },
    {
      id: 6,
      img: orange,
      arrow: ">",
      name: "Honey Orange",
      txt: "Farmer",
    },
  ];
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-[#F9F8F8]">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-10 gap-8">
            {sections?.map((item) => (
              <div key={item.id} className="flex flex-col justify-center gap-3">
                <div
                  style={{ backgroundImage: `url(${item.img})` }}
                  className="lg:w-[15rem] w-[10rem] h-[10rem] p-4 rounded-[20px] cursor-pointer lg:h-[15rem] bg-center bg-cover "
                >
                  <div
                    className={`opacity-0 hover:opacity-100 transition-all ease-linear w-full flex h-full text-center justify-center items-center bg-white rounded-[20px]`}
                  >
                    <p
                      className="shadow-md hover:shadow-xl cursor-pointer select-none py-2 px-4 transition duration-300 ease-in-out bg-[#7EB693] rounded-full text-white font-bold lg:text-xl md:text-lg text-base"
                      onClick={() => navigate("/portfolio-single")}
                    >
                      {item.arrow}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <h1 className="text-[#274C5B] font-semibold lg:text-xl md:text-lg text-base">
                    {item.name}
                  </h1>
                  <p className="text-[#7EB693] font-normal lg:text-lg md:text-base text-sm">
                    {item.txt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSec;
