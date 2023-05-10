import React from "react";
import user from "../../assets/user.png";
import favourite from "../../assets/favourite.png";
import benefits from "../../assets/benefits.png";
import vitamin from "../../assets/vitamin.png";
import research from "../../assets/research.png";
import everyday from "../../assets/everyday.png";
import plastic from "../../assets/plastic.png";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
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
    {
      id: 3,
      img: vitamin,
      date: "25",
      month: "Nov",
      person: user,
      name: "Rachi Card",
      heading: "Benefits of Vitamin C & How to Get It",
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      btn: "Read More",
    },
    {
      id: 4,
      img: research,
      date: "25",
      month: "Nov",
      person: user,
      name: "Rachi Card",
      heading: "Research More Organic Foods",
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      btn: "Read More",
    },
    {
      id: 5,
      img: everyday,
      date: "25",
      month: "Nov",
      person: user,
      name: "Rachi Card",
      heading: "Everyday Fresh Fruites",
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      btn: "Read More",
    },
    {
      id: 6,
      img: plastic,
      date: "25",
      month: "Nov",
      person: user,
      name: "Rachi Card",
      heading: "Don't Use Plastic Product! it's Kill Nature",
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      btn: "Read More",
    },
  ];
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-white">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8 w-[90%] mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center md:gap-7 gap-4">
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
                      <button
                        className="px-4 py-3 bg-[#EFD372] rounded-[14px] text-[#274C5B] font-bold lg:text-lg md:text-base text-sm shadow-md hover:scale-[1.05] transition ease-in-out duration-300 hover:shadow-lg"
                        onClick={() => navigate("/blog-single")}
                      >
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

export default News;
