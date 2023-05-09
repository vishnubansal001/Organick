import React from "react";
import store1 from "../../assets/store1.png";
import store2 from "../../assets/store2.png";
import store3 from "../../assets/store3.png";

const StoreServices = () => {
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative ">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center w-[90%] mx-auto lg:gap-16 md:gap-14 gap-12">
            <div>
              <img src={store1} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center lg:w-[80%] gap-10 lg:mx-auto ">
              <div className="flex flex-col justify-center gap-6">
                <h1 className="font-bold text-[#274C5B] lg:text-5xl md:text-3xl text-2xl">
                  Organic Store Services
                </h1>
                <div className="flex flex-col justify-center items-start gap-3">
                  <p className="font-normal text-[#525C60] md:text-base text-sm">
                    t is a long established fact that a reader will be
                    distracted by the readable content of a page when looking a
                    layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.{" "}
                  </p>
                  <p className="font-normal text-[#525C60] md:text-base text-sm">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and auncover
                    many web sites still in their infancy. Various versions have
                    evolved over the years
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-center items-center gap-7 bg-[#F9F8F8] rounded-[20px] p-6 w-full shadow-md hover:shadow-xl transition ease-in-out duration-300">
                <img src={store2} alt="" className="lg:w-[50%]" />
                <div className="flex flex-col justify-center items-start gap-3">
                  <h1 className="font-semibold text-[#274C5B] lg:text-xl md:text-lg text-base">
                    Why Organic
                  </h1>
                  <p className="font-normal text-[#525C60] md:text-base text-sm">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptat. page editors now use Lorem Ipsum as their default
                    model text, and auncover.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-center items-center gap-7 bg-[#F9F8F8] rounded-[20px] p-6 shadow-md hover:shadow-xl transition ease-in-out duration-300">
                <div className="flex flex-col justify-center items-start gap-3">
                  <h1 className="font-semibold text-[#274C5B] lg:text-xl md:text-lg text-base">
                    Speciality Produce
                  </h1>
                  <p className="font-normal text-[#525C60] md:text-base text-sm">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptat. page editors now use Lorem Ipsum as their default
                    model text, and auncover.
                  </p>
                </div>
                <img src={store3} alt="" className="lg:w-[50%]" />
              </div>
              <div className="flex flex-col justify-center items-start gap-3">
                <h1 className="text-[#274C5B] font-bold lg:text-2xl md:text-xl text-lg">
                  We farm your land
                </h1>
                <p className="font-normal text-[#525C60] md:text-base text-sm">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking a layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
              <div className="flex lg:flex-row flex-col justify-center items-center gap-10">
                <div className="flex flex-row p-4 bg-[#F9F8F8] items-center justify-center gap-3 rounded-full shadow-md">
                  <p className="bg-[#7EB693] text-white font-semibold lg:text-lg md:text-base text-sm py-3 px-4 rounded-full">
                    01
                  </p>
                  <p className="font-bold text-[#274C5B] lg:text-xl md:text-lg text-base">
                    Best quality support
                  </p>
                </div>
                <div className="flex flex-row p-4 bg-[#F9F8F8] items-center justify-center gap-3 rounded-full shadow-md">
                  <p className="bg-[#7EB693] text-white font-semibold lg:text-lg md:text-base text-sm py-3 px-4 rounded-full">
                    02
                  </p>
                  <p className="font-bold text-[#274C5B] lg:text-xl md:text-lg text-base">
                    Money back guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreServices;
