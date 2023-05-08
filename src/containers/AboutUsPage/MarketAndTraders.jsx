import React from "react";
import circle from "../../assets/circle.png";
import returnP from "../../assets/returnP.png";
import fresh from "../../assets/fresh.png";
import support from "../../assets/support.png";
import secure from "../../assets/secure.png";
import market from "../../assets/market.png";

const MarketAndTraders = () => {
  const thinking = [
    {
      id: 1,
      img: circle,
      heading: "100% Natural Product",
      txt: "Simply dummy text of the printing and typesetting industry Lorem Ipsum",
    },
    {
      id: 2,
      img: circle,
      heading: "Increases resistance",
      txt: "Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing",
    },
  ];
  const policies = [
    {
      id: 1,
      img: returnP,
      heading: "Return Policy",
      txt: "Simply dummy text of the printintypesetting industry",
    },
    {
      id: 2,
      img: fresh,
      heading: "100% Fresh",
      txt: "Simply dummy text of the printintypesetting industry",
    },
    {
      id: 3,
      img: support,
      heading: "Support 24/7",
      txt: "Simply dummy text of the printintypesetting industry",
    },
    {
      id: 4,
      img: secure,
      heading: "Secured Payment",
      txt: "Simply dummy text of the printintypesetting industry",
    },
  ];
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-white">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8 w-[90%] mx-auto">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-6">
              <div className="flex flex-col justify-start items-start gap-5 lg:w-[70%] mx-auto w-[90%]">
                <div className="flex flex-col gap-1">
                  <p className="italic text-[#7EB693] font-semibold lg:text-xl md:text-lg text-sm">
                    Why Choose us?
                  </p>
                  <h1 className="font-bold text-[#274C5B] lg:text-4xl md:text-3xl text-2xl">
                    We do not buy from the
                  </h1>
                  <h1 className="font-bold text-[#274C5B] lg:text-4xl md:text-3xl text-2xl">
                    open market & traders.
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[#525C60] lg:text-lg md:text-base text-base">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard the 1500s,
                    when an unknown
                  </p>
                </div>
                <div className="flex flex-col gap-5 justify-center">
                  {thinking?.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col justify-center gap-3"
                    >
                      <div>
                        <div className="inline-flex px-7 py-5 rounded-[30px] gap-3 bg-[#ECECEC]">
                          <img src={item.img} alt="" />
                          <h1 className="text-[#274C5B] font-bold lg:text-xl md:text-lg text-base">
                            {item.heading}
                          </h1>
                        </div>
                      </div>
                      <div className="pl-16 text-[#525C60] lg:text-lg md:text-base text-sm">
                        <p>{item.txt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-auto mx-auto w-[90%]">
                <img src={market} alt="" className="rounded-[20px]" />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3">
              {policies?.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-2 bg-gray-100 shadow-md hover:shadow-xl w-auto p-4 rounded-[14px]"
                >
                  <img
                    src={item.img}
                    alt=""
                    className="shadow-md rounded-[14px]"
                  />
                  <h1 className="font-bold lg:text-lg md:text-base text-sm text-[#274C5B]">
                    {item.heading}
                  </h1>
                  <p className="text-center lg:text-lg md:text-base text-sm text-[#525C60]">
                    {item.txt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketAndTraders;
