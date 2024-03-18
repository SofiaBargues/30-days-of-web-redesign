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
          "url(http://kent.lovesguide.com/towerimages/hinxhill.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex flex-col max-w-lg gap-10">
          <h1 className="mb-5 text-white text-7xl font-bold">
            St Mary Hinxhill
          </h1>
          <p className="mb-5">
            Remote and peaceful Hinxhill is the archetypal country church.
            Almost all dating from the 13th century, the narrow north aisle is a
            typical give way – designed to be used as a processional space
            without benches.
          </p>
          <button className="btn m-20 btn-primary">Donate</button>
        </div>
      </div>
    </div>
  );
};
