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
          "url(https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/295347821_932703234779813_3682614714142714646_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dxJfM5g2GMoAX_EA5j6&_nc_ht=scontent-lhr6-2.xx&oh=00_AfCJNGV7SwS_IipC7nPp64BQjvrPwlqYxDuug14_fq7SEQ&oe=66043BC9)",
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
