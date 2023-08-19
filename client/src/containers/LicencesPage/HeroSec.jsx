import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-[#F9F8F8]">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div className="flex flex-col items-center lg:w-[70%] w-[90%] mx-auto justify-center lg:gap-12 md:gap-10 gap-8">
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 gap-5">
              <h1 className="lg:text-2xl md:text-xl text-lg text-[#274C5B] font-bold">
                Icon & Graphics
              </h1>
              <div className="col-span-3 text-[#525C60] font-normal lg:text-base text-sm md:leading-3 leading-5 flex flex-col gap-3">
                <p>
                  Icons and Graphics are manually designed by the VictorFlow
                  Templates team. You may download these and edit them to fit
                  your website without asking for permission or providing
                  credit.
                </p>
                <p>
                  Upon purchasing Software UI Kit Template our team grants you a
                  nonexclusive, worldwide copyright license to download, copy,
                  modify, and use the icons.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 gap-5">
              <h1 className="lg:text-2xl md:text-xl text-lg text-[#274C5B] font-bold">
                Photography
              </h1>
              <p className=" col-span-3 text-[#525C60] font-normal lg:text-base text-sm md:leading-3 leading-5">
                All images used in the Organick Webflow Template are licensed
                for free personal and commercial use. If you'd like to use any
                specific image, you can check the licenses and download the
                images for free on Unsplash, Pexels. And Freepik.
              </p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 gap-5">
              <h1 className="lg:text-2xl md:text-xl text-lg text-[#274C5B] font-bold">
                Unsplash
              </h1>
              <p className=" col-span-3 text-[#525C60] font-normal lg:text-base text-sm md:leading-3 leading-5">
                Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
                14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20,
                Image 21, Image 22, Image 23, Image 24, Image 25,
              </p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 gap-5">
              <h1 className="lg:text-2xl md:text-xl text-lg text-[#274C5B] font-bold">
                Pixcel
              </h1>
              <p className=" col-span-3 text-[#525C60] font-normal lg:text-base text-sm md:leading-3 leading-5">
                Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
                14, Image 15, Image 16, Image 17,{" "}
              </p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 gap-5">
              <h1 className="lg:text-2xl md:text-xl text-lg text-[#274C5B] font-bold">
                Font
              </h1>
              <p className="col-span-3 text-[#525C60] font-normal lg:text-base text-sm md:leading-3 leading-5">
                Organick template uses free licensed Google Fonts. Please check
                <span>Roboto, Yellowtail and Open Sans.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
