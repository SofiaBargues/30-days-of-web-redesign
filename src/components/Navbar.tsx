// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";
import { Circles } from "./Circles";
import { Squares } from "./Scuares";

export const Navbar = () => {
  return (
    <div className="p-10  navbar bg- max-h-20   ">
      <div className="bg-transparent card text-center h-10">
        <figure className="h-20 w-20">
          <img src="https://www.pngitem.com/pimgs/m/329-3291801_cat-png-download-png-image-with-transparent-background.png" />
        </figure>
        {/* <div className="card-body gap-32"></div> */}
      </div>

      <div className="flex-1">
        <a className="btn btn-lg btn-ghost text-xl">Tigi-tabu Cattery</a>
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
