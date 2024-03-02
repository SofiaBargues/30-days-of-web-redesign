// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";

const Navbar = () => {
  return (
    <nav className="w-full flex py-1 justify-between items-center navbar  relative z-50 flex-0">
      <a className="btn btn-ghost text-2xl text-slate-600 ">
        Jack and Jill Windmills
      </a>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1">
          Menu
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>History</a>
          </li>
          <li>
            <a>Visits</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Events</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
