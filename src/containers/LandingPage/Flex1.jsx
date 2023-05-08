import React from "react";
import garden from "../../assets/garden.png";
import vege from "../../assets/vege.svg";

const Flex1 = () => {
  return (
    <>
      <section className="flex select-none flex-col lg:gap-20 md:gap-14 pt-6 gap-10">
        <div className="flex items-center justify-center lg:py-12 md:py-10 py-8">
          <div className="flex items-center md:flex-row flex-col w-[90%] justify-center lg:gap-8 md:gap-6 gap-4">
            <div>
              <img src={garden} alt="img/garden.svg" />
            </div>
            <div>
              <img src={vege} alt="img/vegetables.svg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Flex1;
