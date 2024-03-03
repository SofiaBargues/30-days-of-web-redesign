// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col">
        {/* Navbar */}
        <div className="w-full bg-white navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-1  px-2 mx-2">
            <img
              src="https://www.ravenside.net/2015/resources/ravenside-logo.jpg"
              className="max-w-sm m h-8"
            />
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <Hero />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}

          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">Retail</div>
            <div className="collapse-content">
              <li>
                <a> B&M Bargains</a>
              </li>
              <li>
                <a>B&Q</a>
              </li>
              <li>
                <a> Boots</a>
              </li>
              <li>
                <a> Currys</a>
              </li>
              <li>
                <a>Halfords</a>
              </li>
              <li>
                <a>M&S</a>
              </li>
              <li>
                <a>Pets at Home</a>
              </li>
              <li>
                <a>PC World</a>
              </li>
              <li>
                <a>Poundland</a>
              </li>
              <li>
                <a>Tapi</a>
              </li>

              <li>
                <a>Carpets & Floors</a>
              </li>
              <li>
                <a>Tesco Wickes</a>
              </li>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Leisure & Food
            </div>
            <div className="collapse-content">
              <li>
                <a>Bexhill Leisure Pool</a>
              </li>
              <li>
                <a>KFC</a>
              </li>
              <li>
                <a>McDonalds</a>
              </li>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Local Links
            </div>
            <div className="collapse-content">
              <li>
                <a>Hastings Guide</a>
              </li>
              <li>
                <a>Hastings Jobs</a>
              </li>
              <li>
                <a> Bexhill Guide </a>
              </li>
              <li>
                <a>Bexhill Jobs</a>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
