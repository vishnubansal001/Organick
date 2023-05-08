import React from "react";
import bacardo from "../../assets/bacardo.png";
import loreno from "../../assets/loreno.svg";
import pelore from "../../assets/pelore.svg";
import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import twitter from "../../assets/twitter.png";

const Experts = () => {
  const experts = [
    {
      id: 1,
      img: bacardo,
      name: "Giovani Bacardo",
      occp: "Farmer",
      socials: [
        { id: 1, link: face },
        { id: 2, link: twitter },
      ],
    },
    {
      id: 2,
      img: loreno,
      name: "Marianne Loreno",
      occp: "Designer",
      socials: [
        { id: 1, link: insta },
        { id: 2, link: face },
        { id: 3, link: twitter },
      ],
    },
    {
      id: 3,
      img: pelore,
      name: "Riga Pelore",
      occp: "Farmer",
      socials: [
        { id: 1, link: insta },
        { id: 2, link: face },
        { id: 3, link: twitter },
      ],
    },
    {
        id: 4,
        img: pelore,
        name: "Keira Knightley",
        occp: "Farmer",
        socials: [
          { id: 1, link: face },
          { id: 2, link: twitter },
        ],
      },
      {
        id: 5,
        img: pelore,
        name: "Scott Lawrence",
        occp: "Designer",
        socials: [
          { id: 1, link: insta },
          { id: 2, link: face },
          { id: 3, link: twitter },
        ],
      },
      {
        id: 6,
        img: pelore,
        name: "Karen Allen",
        occp: "Farmer",
        socials: [
          { id: 1, link: insta },
          { id: 2, link: face },
          { id: 3, link: twitter },
        ],
      },
  ];
  return (
    <>
      <section className="flex select-none items-center justify-center min-h-screen h-full relative bg-white">
        <div className="flex items-center justify-center mx-auto p-6 sm:p-12 lg:p-16">
          <div className="flex flex-col items-center justify-center lg:gap-12 md:gap-10 gap-8 w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center gap-3">
              <p className="font-semibold text-[#7EB693] lg:text-3xl md:text-2xl text-xl italic">
                Team
              </p>
              <h1 className="font-bold text-[#274C5B] lg:text-4xl md:text-3xl text-2xl">
                Our Organic Experts
              </h1>
              <p className="text-[#525C60] lg:text-lg md:text-base text-sm">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {experts?.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFFFFF] rounded-[20px] shadow-md hover:shadow-xl transition duration-300 ease-in-out"
                >
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                  <div className="flex flex-row justify-between items-end p-3">
                    <div className="flex flex-col justify-center items-start">
                      <h1 className="font-bold text-[#274C5B] lg:text-lg md:text-base text-sm">
                        {item.name}
                      </h1>
                      <p className="italic text-[#7EB693] lg:text-lg md:text-base text-sm font-semibold">
                        {item.occp}
                      </p>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-center">
                      {item.socials?.map((i) => (
                        <img key={i.id} src={i.link} />
                      ))}
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

export default Experts;
