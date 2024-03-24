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
        <div className="flex flex-col mt-20 w-screen gap-5 ">
          <h1 className=" text-white text-7xl mt-10 font-bold text-balance">
            JIGSAW
          </h1>
          <h1 className=" font-medium text-3xl  text-balance   text-secondary">
            Mitcham & Morden
          </h1>
          <div className="flex flex-col max-w-md">
            <p className=" text-2xl  text-left text-neutral-400 w-80">
              Jigsaw Performing Arts Schools offer weekend drama, singing and
              dance classes for children aged 3-18 across London, the Home
              Counties, in Cardiff and Oxford. Our classes are an excellent way
              to build confidence and social skills and are a huge amount of
              fun. With three terms throughout the year: spring, summer and
              autumn, there are plenty of opportunities for students to take to
              the stage with us.
            </p>
          </div>
          <div>
            <button className="btn btn-lg text-white btn-primary">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};
