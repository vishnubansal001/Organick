import React, { useState } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import cart from "../../assets/cart.png";

const Navbar = () => {
  const [item, setItem] = useState(0);
  const navItems = [
    {
      id: 1,
      txt: "Home",
      link: "/",
    },
    {
      id: 2,
      txt: "About",
      link: "/about-us",
    },
    {
      id: 3,
      txt: "Shop",
      link: "/shop",
    },
    {
      id: 4,
      txt: "Projects",
      link: "/projects",
    },
    {
      id: 5,
      txt: "News",
      link: "/news",
    },
  ];
  return (
    <div className="lg:flex justify-center bg-[#FAFAFA] items-center py-4 hidden px-4">
      <div className="flex w-full px-4 justify-between gap-2 items-center">
        <div className="flex justify-center items-center gap-24 pr-2">
          <div className="flex items-center justify-center">
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center justify-center p-2 w-full">
            <div className="flex justify-center items-center gap-16">
              {navItems?.map((item) => (
                <div key={item.id}>
                  <div className="font-bold text-xl">{item.txt}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 p-2">
          <div className="flex justify-center items-center rounded-full bg-[#7EB693] p-3">
            <button><img src={search} alt="" /></button>
          </div>
          <div className="flex items-center justify-center gap-2 p-2 border rounded-full">
            <div className="flex justify-center items-center rounded-full bg-[#274C5B] p-2">
              <button><img src={cart} alt="" /></button>
            </div>
            <div className="text-[#274C5B] font-bold text-lg">
              <p>Cart {`(${item})`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
