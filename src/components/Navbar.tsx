// import { useState } from "react";
import { close, logo, curch } from "../assets";
import { navLinks } from "../constants/data";
import { Circles } from "./About";
import { Squares } from "./Scuares";

export const Navbar = () => {
  return (
    <nav className="bg-transparent  dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5e53fd130b5d7822b0c250a5/1613264173858-RB7H4N7U0WG6GMF3RYXY/Cutout+Logo.png?format=1500w"
          className="h-20"
          alt="Flowbite Logo"
        />

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="btn text-white btn-md  btn-primary mx-10">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};
