import React from "react";
import { useNavigate } from "react-router-dom";

const Farmers = ({
  ifExists,
  sectionApi: { bgImg, title, heading1, heading2, txt, data, btn },
}) => {
  var link = "";
  const navigate = useNavigate();
  if (ifExists) link = "/shop";
  else link = "/quality";
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat flex select-none items-center justify-center min-h-screen h-full p-3 relative"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex items-center justify-center mx-auto p-4 sm:p-6 lg:p-8">
          <div className="lg:inline-block hidden w-[100%]"></div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="italic text-green-400 font-semibold lg:text-xl md:text-lg text-sm">
                {title}
              </p>
              <h1 className="font-bold text-[#274C5B] lg:text-5xl md:text-3xl text-2xl">
                {heading1}
              </h1>
              <h1 className="font-bold text-[#274C5B] lg:text-5xl md:text-3xl text-2xl">
                {heading2}
              </h1>
              <p className="md:text-base text-sm lg:font-normal">{txt}</p>
            </div>
            <div className="flex flex-col gap-2">
              {data?.map((item) => (
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
                  <p
                    className="text-white font-bold lg:text-xl md:text-base text-sm"
                    onClick={() => navigate(`${link}`)}
                  >
                    {btn}
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
