// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";
import { Stacks } from "./Stacks";

export const Navbar = () => {
  return (
    <div className="navbar  relative">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">AMD</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Managment</a>
          </li>
          <li>
            <details>
              <summary>Information</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
