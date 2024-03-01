// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";

const SubNavbar = () => {
  return (
    <div className=" bg-white join flex w-full mx-0 px-10 my-0 py-0 h-16">
      <input
        className="join-item btn btn-square flex-grow"
        type="radio"
        name="options"
        aria-label="1"
        checked
      />
      <input
        className="join-item btn btn-square flex-grow"
        type="radio"
        name="options"
        aria-label="2"
      />
      <input
        className="join-item btn btn-square flex-grow"
        type="radio"
        name="options"
        aria-label="3"
      />
      <input
        className="join-item btn btn-square flex-grow"
        type="radio"
        name="options"
        aria-label="4"
      />
      <input
        className="join-item btn btn-square flex-grow"
        type="radio"
        name="options"
        aria-label="3"
      />
      <input
        className="join-item btn btn-square flex-grow"
        type="radio"
        name="options"
        aria-label="4"
      />
    </div>
  );
};

export default SubNavbar;
