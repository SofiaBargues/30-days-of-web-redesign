import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./About";
import { Cards } from "./Card";

export const Hero = () => {
  return (
    <div
      className="hero h-screen "
      style={{
        backgroundImage:
          "url(https://www.jigsaw-arts.co.uk/wp-content/uploads/Jigsaw-Performing-Arts-14th-November-2021-%C2%A9-Brendan-Foster-Photography-17-11.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content mx-20 text-neutral-content">
        <div className="flex flex-col  gap-10 w-screen ">
          <div className="flex flex-col max-w-md gap-10">
            <h1 className="mb-5 text-white text-7xl font-light text-balance">
              Homely bistro
            </h1>
            <p className="mb-5 text-2xl ">
              warm welcome to the Coach House Cafe from Gary and Lisa. We are a
              family-run bistro with over 20 years' experience. We serve freshly
              prepared breakfast, lunches, meals, snacks and drinks.
            </p>
          </div>
          <div>
            <button className="btn btn-lg  btn-secondary">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};
