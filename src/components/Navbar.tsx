// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";
import { Circles } from "./Circles";
import { Squares } from "./Scuares";

export const Navbar = () => {
  return (
    <div className="p-6  navbar absolute">
      <div className="bg-transparent color card w-auto text-center    image-full">
        {/* <figure>
          <img src="http://www.girlguiding-heartsease.org.uk/uploads/4/0/8/9/40899669/published/output-3.png?1679330491" />
        </figure> */}
        <div className="card-body gap-32"></div>
      </div>

      <div className="flex-1">
        <a className="btn btn-lg btn-ghost text-xl">Camping</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
