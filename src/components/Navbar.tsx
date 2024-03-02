// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";

const Navbar = () => {
  return (
    <div className="navbar bg-white">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <img
          className=" h-auto"
          src="https://static.wixstatic.com/media/f8d286_6df84a784cc24f23ac1998906ed05d7c~mv2_d_1417_1417_s_2.jpg/v1/fill/w_87,h_87,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f8d286_6df84a784cc24f23ac1998906ed05d7c~mv2_d_1417_1417_s_2.jpg"
          alt="Placeholder"
        />
        <a className="text-2xl">
          Brighton Seafront<br></br> Heritage Trust
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
