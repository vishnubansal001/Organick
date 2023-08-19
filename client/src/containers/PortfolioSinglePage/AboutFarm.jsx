import React from "react";
import newCarrot from "../../assets/newCarrot.png";

const AboutFarm = () => {
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-[#F9F8F8]">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center lg:w-[70%] md:w-[80%] w-[90%] mx-auto justify-center lg:gap-12 md:gap-10 gap-8">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#274C5B] font-bold lg:text-2xl md:text-xl text-lg">
                About The Farm:
              </h1>
              <p className="font-normal text-[#525C60] md:text-base text-sm">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.{" "}
              </p>
              <p className="font-normal text-[#525C60] md:text-base text-sm">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and auncover many web
                sites still in their infancy. Various versions have evolved over
                the years
              </p>
            </div>
            <div>
              <img src={newCarrot} alt="" />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-[#274C5B] font-bold lg:text-2xl md:text-xl text-lg">
                How To Farm:
              </h1>
              <p className="font-normal text-[#525C60] md:text-base text-sm">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.{" "}
              </p>
              <p className="font-normal text-[#525C60] md:text-base text-sm">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and auncover many web
                sites still in their infancy. Various versions have evolved over
                the years
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-[#274C5B] font-bold lg:text-2xl md:text-xl text-lg">
                Conclusion:
              </h1>
              <p className="font-normal text-[#525C60] md:text-base text-sm">
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.{" "}
              </p>
              <p className="font-normal text-[#525C60] md:text-base text-sm">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and auncover many web
                sites still in their infancy. Various versions have evolved over
                the years
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFarm;
