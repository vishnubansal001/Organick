import React from "react";
import farmers from "../../assets/farmers.svg";
import foods from "../../assets/foods.svg";
import quality from "../../assets/quality.svg";

const Farmers = () => {
  const about = [
    {
      id: 1,
      img: foods,
      heading: "Organic Foods Only",
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
    {
      id: 2,
      img: quality,
      heading: "Quality Standards",
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
  ];
  //   {console.log(about)}
  return (
    <>
      {/* <img src={farmers} alt="" /> */}
      <section
        className="bg-cover bg-center flex select-none items-center justify-center min-h-screen h-full p-3 relative"
        style={{ backgroundImage: `url(${farmers})` }}
      >
        <div className="flex items-center justify-center mx-auto p-4 sm:p-6 lg:p-8">
          <div className="lg:inline-block hidden w-[100%]"></div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="italic text-green-400 font-semibold lg:text-xl md:text-lg text-sm">
                About Us
              </p>
              <h1 className="font-bold text-[#274C5B] lg:text-5xl md:text-3xl text-2xl">
                We Believe in Working
              </h1>
              <h1 className="font-bold text-[#274C5B] lg:text-5xl md:text-3xl text-2xl">
                Accredited Farmers
              </h1>
              <p className="md:text-base text-sm lg:font-normal">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {about?.map((item) => (
                <div key={item.id} className="flex flex-row items-center gap-3">
                  <img src={item.img} alt="" />
                  <div className="flex flex-col">
                    <h1 className="font-bold text-[#274C5B] lg:text-2xl md:text-xl text-lg">
                      {item.heading}
                    </h1>
                    <p className="md:text-base text-sm">{item.txt}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center select-none">
              <div className="p-4 bg-[#274C5B] rounded-[20px] cursor-pointer hover:shadow-xl hover:scale-[1.1] transition ease-in-out duration-300">
                <button>
                  <p className="text-white font-bold lg:text-xl md:text-base text-sm">
                    Shop Now
                  </p>
                  <div>
                    <img src="" alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Farmers;
