// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
    </nav>
  );
};

export default Navbar;
