import React from "react";
import logo from "../../assets/logo.svg";
import insta from "../../assets/insta.svg";
import face from "../../assets/face.svg";
import twitter from "../../assets/twitter.svg";
import pint from "../../assets/pint.svg";

const Footer = () => {
  const contact = [
    {
      id: 1,
      heading: "Email",
      txt: "needhelp@Organia.com",
    },
    {
      id: 2,
      heading: "Phone",
      txt: "666 888 8888",
    },
    {
      id: 3,
      heading: "Address",
      txt: "Chitkara University,Punjab,India",
    },
  ];

  const utility = [
    {
      id: 1,
      txt: "404 Not Found",
    },
    {
      id: 2,
      txt: "Password Protected",
    },
    {
      id: 3,
      txt: "Licences",
    },
    {
      id: 4,
      txt: "Changelog",
    },
  ];
  return (
    <>
      <footer className="flex flex-col p-3 select-none items-center justify-center relative bg-white gap-5">
        <div className="lg:w-[80%] w-[90%] mx-auto flex flex-col justify-center items-center">
          <div className="lg:w-[90%] w-full lg:mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex flex-col justify-center items-center gap-3 md:border-r-2">
              <h1 className="text-[#274C5B] lg:text-2xl md:text-xl text-lg font-bold">
                Contact Us
              </h1>
              <div className="flex flex-col gap-4">
                {contact?.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 md:justify-end md:items-end items-center justify-center"
                  >
                    <h1 className="font-bold text-[#525C60] lg:text-lg md:text-base text-sm">
                      {item.heading}
                    </h1>
                    <p className="text-[#525C60] lg:text-base text-sm">
                      {item.txt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center lg:border-r-2 gap-5 lg:p-5">
              <div className="flex flex-col items-center justify-center gap-3">
                <img src={logo} alt="" />
                <p className="text-[#525C60] lg:text-base text-sm ">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing{" "}
                </p>
              </div>
              <div className="flex flex-row gap-5 items-center justify-center">
                <img
                  src={insta}
                  alt=""
                  className="p-3 bg-[#EFF6F1] rounded-full cursor-pointer shadow-md hover:shadow-xl transition ease-in-out duration-300 "
                />
                <img
                  src={face}
                  alt=""
                  className="p-3 bg-[#EFF6F1] rounded-full cursor-pointer shadow-md hover:shadow-xl transition ease-in-out duration-300 "
                />
                <img
                  src={twitter}
                  alt=""
                  className="p-3 bg-[#EFF6F1] rounded-full cursor-pointer shadow-md hover:shadow-xl transition ease-in-out duration-300 "
                />
                <img
                  src={pint}
                  alt=""
                  className="p-3 bg-[#EFF6F1] rounded-full cursor-pointer shadow-md hover:shadow-xl transition ease-in-out duration-300 "
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[#274C5B] text-center lg:text-2xl md:text-xl text-lg font-bold">
                Utility Pages
              </h1>
              <div className="flex flex-col gap-4">
                {utility?.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 lg:justify-start lg:items-start items-center justify-center"
                  >
                    <p className="text-[#525C60] lg:text-base text-sm hover:underline transition ease-in-out duration-300 cursor-pointer">
                      {item.txt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center border-t-2 w-full p-3">
          <p className="text-[#525C60]">
            Copyright &copy; <span className="font-bold">Organick</span> |
            Designed by <span className="font-bold">VB</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
