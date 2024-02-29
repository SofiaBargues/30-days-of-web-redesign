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
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li id="Gym Play">
                    <a>Gym Play</a>
                  </li>
                  <li id="Happyjacks Gallery">
                    <a>Happyjacks Gallery</a>
                  </li>
                  <li id="About">
                    <a>Contact Us</a>
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
