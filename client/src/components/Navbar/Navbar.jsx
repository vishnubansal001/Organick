import React, { useState } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import cart from "../../assets/cart.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [item, setItem] = useState(0);
  const [popupState, setPopupState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);
  const navigate = useNavigate();
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
    // {
    //   id: 4,
    //   txt: "Portfolio",
    //   link: "/portfolio",
    // },
    {
      id: 4,
      txt: "News",
      link: "/recent-news",
    },
  ];
  return (
    <>
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
                    <div
                      className="font-bold text-xl cursor-pointer"
                      onClick={() => navigate(`${item.link}`)}
                    >
                      {item.txt}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-2">
            <div className="flex justify-center items-center rounded-full bg-[#7EB693] p-3">
              <button>
                <img src={search} alt="" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 p-2 border rounded-full">
              <div className="flex justify-center items-center rounded-full bg-[#274C5B] p-2">
                <button>
                  <img src={cart} alt="" />
                </button>
              </div>
              <div className="text-[#274C5B] font-bold text-lg">
                <p>Cart {`(${item})`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="lg:hidden flex">
          <div className="w-full px-[20px] py-[10px] z-[40]">
            <div className="flex justify-between items-center">
              <img src={logo} alt="img/logo.svg" />
              <div
                onClick={onTriggerPopup}
                className="blob p-2 flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
              >
                <svg
                  class="w-[45px] h-[45px] sm:w-[40px] sm:h-[40px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7H11C11.2652 7 11.5196 7.10536 11.7071 7.29289C11.8946 7.48043 12 7.73478 12 8C12 8.26522 11.8946 8.51957 11.7071 8.70711C11.5196 8.89464 11.2652 9 11 9H6C5.73478 9 5.48043 8.89464 5.29289 8.70711C5.10536 8.51957 5 8.26522 5 8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7V7ZM13 15H18C18.2652 15 18.5196 15.1054 18.7071 15.2929C18.8946 15.4804 19 15.7348 19 16C19 16.2652 18.8946 16.5196 18.7071 16.7071C18.5196 16.8946 18.2652 17 18 17H13C12.7348 17 12.4804 16.8946 12.2929 16.7071C12.1054 16.5196 12 16.2652 12 16C12 15.7348 12.1054 15.4804 12.2929 15.2929C12.4804 15.1054 12.7348 15 13 15ZM6 11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <nav
          className={`fixed top-0  w-screen flex flex-col py-6 px-6 bg-black text-white uppercase h-screen lg:hidden z-[1000] items-center justify-center transition-transform duration-500 ${
            popupState ? "showpopup" : "noshowpopup"
          }`}
        >
          <div
            className="flex item-center justify-end text-white font-extrabold p-4 w-full"
            onClick={onTriggerPopup}
          >
            <div className="p-5 rounded-full border blob2 border-white cursor-pointer">
              X
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <ul className=" flex items-start flex-col gap-3">
              <li>
                <a onClick={() => navigate("/")}>Home</a>
              </li>
              <li>
                <a onClick={() => navigate("/about-us")}>about</a>
              </li>
              <li>
                <a onClick={() => navigate("/shop")}>shop</a>
              </li>
              {/* <li>
                <a onClick={() => navigate("/portfolio")}>portfolio</a>
              </li> */}
              <li>
                <a onClick={() => navigate("/recent-news")}>news</a>
              </li>
              <div className="text-white font-bold text-lg">
                <p>Cart {`(${item})`}</p>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
