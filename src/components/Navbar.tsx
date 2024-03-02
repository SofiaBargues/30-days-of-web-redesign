// import { useState } from "react";
// import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/data";

const Navbar = () => {
  return (
    <nav className="w-full flex py-1 justify-between items-center navbar  relative z-50 flex-0">
      <div className="navbar bg-base-100">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary btn btn-square btn-ghost drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
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
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    Chattri History
                  </div>
                  <div className="collapse-content">
                    <li>
                      <a>Brief History</a>
                    </li>
                    <li>
                      <a>In Depth History</a>
                    </li>
                    <li>
                      <a>Exhibition</a>
                    </li>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Memorial Service & Events
                  </div>
                  <div className="collapse-content">
                    <li>
                      <a>Service</a>
                    </li>
                    <li>
                      <a>Getting Here</a>
                    </li>
                    <li>
                      <a>Other Events</a>
                    </li>
                    <li>
                      <a>Royal Visit 2014</a>
                    </li>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Photo Galleries
                  </div>
                  <div className="collapse-content">
                    <li>
                      <a>Service 2008</a>
                    </li>
                    <li>
                      <a>Service 2012</a>
                    </li>
                    <li>
                      <a>Service 2014</a>
                    </li>
                    <li>
                      <a>Royal Visit 2014</a>
                    </li>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">
                    Videos
                  </div>
                  <div className="collapse-content">
                    <li>
                      <a>Charttri Videos</a>
                    </li>
                  </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title text-xl font-medium">Shop</div>
                  <div className="collapse-content">
                    <li>
                      <a>Memorablia</a>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <a className="btn btn-ghost text-2xl">Chattri</a>
      </div>
    </nav>
  );
};

export default Navbar;
