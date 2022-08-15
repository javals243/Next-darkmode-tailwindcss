/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { DarkModeToggle } from "../DarkModeToggle/DarkModeToggle";
type Props = {
  isDarkMode: boolean;
  setIsDarkMode: boolean;
};
const Navigation = () => {
  const [isExpanded, toggleExpansion] = useState<boolean>(false);

  return (
    <nav
      className={`flex absolute  top-0 left-0 w-full z-50 items-center justify-between flex-wrap lg:px-28  lg:transparent p-2 `}
    >
      <div className="lg:hidden">
        <img
          className="w-[100px] h-[50px]"
          src={`${process.env.NEXT_PUBLIC_URL}/logo.svg`}
          alt="logo"
        />
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center  px-3 py-2 border rounded Text-black border-teal-400 hover:text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `flex` : `hidden`
        } w-full flex flex-col lg:flex-row justify-between lg:flex lg:items-center lg:w-full`}
      >
        <div className="flex-1 text-[14px] font-[400] leading-[24px] ">
          <a
            href=""
            className="block mt-4 lg:inline-block lg:mt-0 Text-[color: #505F98] hover:text-black mr-4"
          >
            Home
          </a>
          <a
            href=""
            className="block mt-4 lg:inline-block lg:mt-0 Text-[color: #505F98] hover:text-black mr-4"
          >
            About
          </a>
          <a
            href=""
            className="block mt-4 lg:inline-block lg:mt-0 Text-[color: #505F98] hover:text-black mr-4"
          >
            Projects
          </a>
          <a
            href=""
            className="block mt-4 lg:inline-block lg:mt-0 Text-[color: #505F98] hover:text-black"
          >
            Team
          </a>
        </div>
        <div className="flex-1">
          <img
            className="w-[200px] h-[50px]"
            src={`${process.env.NEXT_PUBLIC_URL}/logo.svg`}
            alt="Hero section"
          />
        </div>
        <div className="flex-1 flex justify-around items-center">
          <a href="#" className="btn-secondary">
            Hire Us{" "}
          </a>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
