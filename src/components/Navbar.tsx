// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";

export const Navbar = () => {
  return (
    <div className="p-6 navbar absolute">
      <div className="flex-1">
        <a className="text-neutral-content text-xl">THE WHITE LION HOTEL</a>
      </div>
      <div className="flex-none text-neutral-content">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary ">new</span>
          <button className="btn border-none  join-item bg-transparent text-neutral-content ">
            <a>RESTAURANT</a>
          </button>
        </div>
        <ul className="menu menu-horizontal px-1">
          <li></li>
          <li>
            <details>
              <summary>HOTEL</summary>
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
