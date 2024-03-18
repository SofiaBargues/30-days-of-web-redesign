import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./TimeLine";
import { Cards } from "./Card";

export const Hero = () => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage:
          "url(https://www.ovingvillagehall.com/uploads/3/0/9/2/30928497/gfd_orig.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex gap-10 items-center">
          <div className="flex flex-col max-w-md gap-10">
            <h1 className="mb-5 text-white text-7xl font-bold text-balance">
              Welcome to Oving Village Hall
            </h1>
            <p className="mb-5">
              Remote and peaceful Hinxhill is the archetypal country church.
              Almost all dating from the 13th century, the narrow north aisle is
              a typical give way – designed to be used as a processional space
              without benches.
            </p>
          </div>
          <button className="btn btn-lg m-20 btn-primary">Book</button>
        </div>
      </div>
    </div>
  );
};
