// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";

const SubNavbar = () => {
  return (
    <div className="flex justify-center items-center py-6 bg-white text-white h-full">
      <input
        type="checkbox"
        aria-label="Home"
        className="btn rounded-none btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      />
      <input
        type="checkbox"
        aria-label="The Fishing Quarter"
        className="btn rounded-none btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      />
      <input
        type="checkbox"
        aria-label="The Brigthon Fishing Museum"
        className="btn rounded-none btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      />
      <input
        type="checkbox"
        aria-label="Event & Exibit Space"
        className="btn rounded-none btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      />
      <input
        type="checkbox"
        aria-label="What's On"
        className="btn rounded-none btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      />
      <input
        type="checkbox"
        aria-label="About Us"
        className="btn rounded-none btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      />
    </div>
  );
};

export default SubNavbar;
