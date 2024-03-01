import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="navbar bg-base-100 px-10">
        <div className="flex-1">
          <img src={logo} alt="hoobank" className="w-20 h-30" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a href="#GymPlay">Gym Play</a>
                  </li>
                  <li>
                    <a href="#HappyjacksGallery">Happyjacks Gallery</a>
                  </li>
                  <li>
                    <a href="#AboutUs">About Us</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
