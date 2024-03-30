// import { useState } from "react";
import { close, logo, curch } from "../assets";
import { navLinks } from "../constants/data";
import { Circles } from "./About";
import { Squares } from "./Scuares";

export const Navbar = () => {
  return (
    <nav className="bg-transparent  dark:bg-gray-900  w-full z-20 top-0 start-0 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src="https://static.wixstatic.com/media/29f523_6ab695643ab3496bb0cad48bd72be602~mv2.png/v1/fill/w_246,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/29f523_6ab695643ab3496bb0cad48bd72be602~mv2.png"
          className="h-20"
          alt="Flowbite Logo"
        />

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className=" btn btn-lg text-red-600 font-bold  text-2xl hover:btn-primary mx-10">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};
