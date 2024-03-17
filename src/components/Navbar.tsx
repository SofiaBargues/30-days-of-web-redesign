// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";
import { Circles } from "./Circles";
import { Squares } from "./Scuares";

export const Navbar = () => {
  return (
    <div className="navbar px-20 bg-base-100">
      <div className="navbar-start">
        <div className="m-6 ">
          <div className="w-8 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://www.estatetext.com/_next/image?url=%2Flogo.png&w=48&q=75"
            />
          </div>
        </div>
        <a className=" font-bold text-xl  text-blue-600 ">EstateText</a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <div className="chakra-stack css-1asmrat">
          <a
            className="btn btn-ghost text-gray-400 text-lg chakra-link css-18qt80p"
            href="/#faq"
          >
            FAQ
          </a>
          <a
            className="btn btn-ghost text-gray-400 text-lg chakra-link css-18qt80p"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="btn btn-ghost chakra-link text-lg css-18qt80p"
            href="/login"
          >
            Login
          </a>
          <button
            type="button"
            className="btn btn-ghost text-blue-500 text-lg chakra-button css-nplokc"
          >
            Earn more now
          </button>
        </div>
      </div>
    </div>
  );
};
