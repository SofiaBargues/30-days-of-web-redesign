import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./About";
import { Cards } from "./Card";

export const Hero = () => {
  return (
    <div
      className="hero h-[550px]"
      style={{
        backgroundImage:
          "url(https://images.trvl-media.com/lodging/34000000/33590000/33585100/33585087/758c27d2.jpg?impolicy=resizecrop&rw=1200&ra=fit)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex gap-10 items-center">
          <div className="flex flex-col max-w-md gap-10">
            <h1 className="mb-5 text-white text-7xl font-bold text-balance">
              Dolly Plum Cottage
            </h1>
            <p className="mb-5">
              Dolly Plum Cottage is a detached former agricultural building that
              has been converted into a delightful 1 bed cottage and is ideally
              situated to explore the many attractions located in this beautiful
              part of Kent.
            </p>
          </div>
          <button className="btn btn-lg m-20 btn-primary" src="Availability">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};
