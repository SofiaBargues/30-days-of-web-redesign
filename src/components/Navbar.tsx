// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";

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
        <a className="text-neutral-content text-xl"></a>
      </div>
      <div className="flex-none text-neutral-content">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary ">new</span>
          <button className=" btn btn-sm hover:bg-neutral border-none  join-item bg-transparent text-neutral-content ">
            <a>Business</a>
          </button>
        </div>
        <ul className="menu  menu-horizontal px-1">
          <li></li>
          <li>
            <details>
              <summary>Camps</summary>
              <ul className="p-2 bg-transparent">
                <li>
                  <a>Information</a>
                </li>
                <li>
                  <a>Rooms</a>
                </li>
                <li>
                  <a>Menu</a>
                </li>
                <li>
                  <a>Opening</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
