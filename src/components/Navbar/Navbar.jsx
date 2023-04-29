import React, { useState } from "react";

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
    <header>
      <nav>
        <div>
          <div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <div>
                  {navItems?.map((item) => (
                    <div key={item.id}>
                      <div>{item.txt}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <p>Cart {`(${item})`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
