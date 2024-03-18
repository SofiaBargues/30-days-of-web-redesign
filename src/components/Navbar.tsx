// import { useState } from "react";
import { close, logo, curch } from "../assets";
import { navLinks } from "../constants/data";
import { Circles } from "./TimeLine";
import { Squares } from "./Scuares";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="w-40 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={curch} />
        </div>{" "}
      </div>
      <a className="font-bold px-6 text-2xl">St Mary Hinxhill</a>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Churches Searcher"
            className="input input-bordered w-44 h-10 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};
