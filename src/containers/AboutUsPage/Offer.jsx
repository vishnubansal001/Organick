import React from "react";

const Offer = () => {
  const offers = [
    {
      id: 1,
      img: mungBean,
      txt: "Mung Bean",
    },
    {
      id: 2,
      img: Bhazelnut,
      txt: "Brown Hazelnut",
    },
    {
      id: 3,
      img: onion,
      txt: "Onion",
    },
    {
      id: 4,
      img: cabbage,
      txt: "Cabbage",
    },
  ];
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full bg-[#274C5B] p-3 relative">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8">
            <div className="flex md:justify-between items-center justify-center md:flex-row flex-col gap-5 w-full">
              <div className="flex flex-col justify-center gap-2">
                <p className="font-semibold text-[#7EB693] lg:text-3xl md:text-2xl text-xl italic">
                  About Us
                </p>
                <h1 className="font-bold text-white lg:text-4xl md:text-3xl text-2xl">
                  What We Offer For You
                </h1>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 gap-3">
              {offers?.map((item) => (
                <></>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
