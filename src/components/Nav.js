import React, { useState } from "react";
import { logoMobile } from "../assets/index";
import { menuIcon, close2, lagom } from "../assets/index";
import $ from "jquery";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      setToggle(false);
    }
  });

  document.addEventListener("click", (e) => {
    const isClosest = e.target.closest("#menu");

    if (!isClosest && toggle === true) {
      setToggle(false);
    }
  });

  return (
    <div>
      <nav
        id="menu"
        className=" relative pb-5 flex p-3 justify-between border-b-4  md:w-1/2 md:mx-[45%] border-black"
      >
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={lagom}
            alt="Logo"
            className="w-full"
          />
          <source  media="(max-width: 768px)" srcSet={logoMobile} />
          <img src="" alt="none" />
        </picture>
        <img
          onClick={() => setToggle(!toggle)}
          src={`${toggle ? close2 : menuIcon}`}
          alt="Menu icon"
          className=" z-10 w-[40px]  cursor-pointer w-100"
        />
      </nav>
      <div
        className={` absolute ${
          toggle ? "display" : "hidden"
        } transition-all z-1 top-0 bg-black w-full h-full`}
      >
        <ul className="list-none flex flex-col p-20 text-4xl gap-10 md:p-80">
          <li className="text-gray-twitter hover:text-white inter md:text-7xl">
            Home
          </li>
          <li className="text-gray-twitter hover:text-white inter md:text-7xl">
            About
          </li>
          <li className="text-gray-twitter hover:text-white inter md:text-7xl">
            Work
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
