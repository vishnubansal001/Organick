import React from "react";
import user from "../../assets/user.svg";
import favourite from "../../assets/favourite.svg";
import benefits from "../../assets/benefits.svg";

const Dsicover = () => {
  const discover = [
    {
      id: 1,
      img: benefits,
      date: "25",
      month: "Nov",
      person: user,
      name: "Rachi Card",
      heading: "The Benefits of Vitamin D & How to Get it",
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      btn: "Read More",
    },
    {
      id: 2,
      img: favourite,
      date: "25",
      month: "Nov",
      person: user,
      name: "Rachi Card",
      heading: "Our Favourite Summertime Tommeto",
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      btn: "Read More",
    },
  ];
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-white">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8 w-[90%] mx-auto">
            <div className="flex md:flex-row flex-col lg:justify-between w-full md:justify-center items-end lg:gap-0 gap-4">
              <div className="flex flex-col justify-center gap-3">
                <p className="font-semibold text-[#7EB693] lg:text-3xl md:text-2xl text-xl italic">
                  News
                </p>
                <div className="flex flex-col justify-center gap-2">
                  <h1 className="font-bold text-[#274C5B] lg:text-4xl md:text-3xl text-2xl">
                    Discover weekly content about
                  </h1>
                  <h1 className="font-bold text-[#274C5B] lg:text-4xl md:text-3xl text-2xl">
                    organic food, & more
                  </h1>
                </div>
              </div>
              <div>
                <button className="bg-transparent border-2 border-[#274C5B] text-[#274C5B] px-5 py-3 font-semibold lg:text-xl md:text-lg text-base rounded-[14px] shadow-md hover:shadow-xl transition duration-300 ease-in-out hover:scale-[1.05]">
                  More News
                </button>
              </div>
            </div>
            <div className="flex md:flex-row flex-col justify-center items-center md:gap-7 gap-4">
              {discover?.map((item) => (
                <div
                  key={item.id}
                  style={{ backgroundImage: `url(${item.img})` }}
                  className="bg-cover bg-center p-6 rounded-[20px] flex flex-col justify-between gap-10"
                >
                  <div className="">
                    <div className="bg-white py-2 px-4 rounded-full inline-flex flex-col items-center justify-center">
                      <p className="font-bold text-[#274C5B] lg:text-lg md:text-base text-sm">
                        {item.date}
                      </p>
                      <p className="font-bold text-[#274C5B] lg:text-lg md:text-base text-sm">
                        {item.month}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-[14px] p-4 flex flex-col justify-center gap-3 shadow-lg">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <img src={item.person} alt="" />
                      <p className="text-[#274C5B] font-semibold lg:text-lg text-base">
                        By {item.name}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                      <h1 className="lg:text-xl md:text-lg text-base text-[#274C5B] font-bold ">
                        {item.heading}
                      </h1>
                      <p className="text-[#525C60] font-normal lg:text-base text-sm md:leading-3 leading-5">
                        {item.txt}
                      </p>
                    </div>
                    <div>
                      <button className="px-4 py-3 bg-[#EFD372] rounded-[14px] text-[#274C5B] font-bold lg:text-lg md:text-base text-sm shadow-md hover:scale-[1.05] transition ease-in-out duration-300 hover:shadow-lg">
                        {item.btn}
                      </button>
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

export default Dsicover;
