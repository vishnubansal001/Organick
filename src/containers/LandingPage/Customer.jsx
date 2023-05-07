import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import customer from "../../assets/Customer.svg";
import Star from "../../assets/star.svg";
import customerbg from "../../assets/customerbg.png";

const Customer = () => {
  const total = [
    {
      id: 1,
      heading: "100%",
      txt: "Organic",
    },
    {
      id: 2,
      heading: "285",
      txt: "Active Product",
    },
    {
      id: 3,
      heading: "350+",
      txt: "Organic Orchads",
    },
    {
      id: 4,
      heading: "25+",
      txt: "Years of Farming",
    },
  ];

  const customers = [
    {
      id: 1,
      img: customer,
      star: Star,
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      name: "Sara Taylor",
      position: "customer",
    },
    {
      id: 2,
      img: customer,
      star: Star,
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      name: "Sara Taylor",
      position: "customer",
    },
    {
      id: 3,
      img: customer,
      star: Star,
      txt: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      name: "Sara Taylor",
      position: "customer",
    },
  ];
  // SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <>
      <section
        className="bg-cover bg-center select-none min-h-screen w-full flex h-full bg-[#F9F8F8] p-3 relative"
        style={{ backgroundImage: `url(${customerbg})` }}
      >
        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div>
            <div>
              <div>
                <h1>Testimonial</h1>
                <h1>What Our Customer Saying?</h1>
              </div>
              <div className="flex items-center justify-center w-full h-full">
                <Swiper
                  // modules={[Navigation, Pagination, EffectFade, Autoplay]}
                  // autoplay={{ delay: 3500 }}
                  // navigation={false}
                  // loop={true}
                >
                  {customers?.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="flex items-center justify-center p-2">
                      <div>
                        <img src={item.img} alt="" />
                        <img src={item.star} alt="" />
                      </div>
                      <div>
                        <p>{item.txt}</p>
                        <h1>{item.name}</h1>
                        <p>{item.position}</p>
                      </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div>
              {total?.map((item) => (
                <div key={item.id}>
                  <h1>{item.heading}</h1>
                  <p>{item.txt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
