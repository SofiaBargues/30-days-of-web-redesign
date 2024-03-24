import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./About";
import { Cards } from "./Card";

export const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          "url(https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/295347821_932703234779813_3682614714142714646_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dxJfM5g2GMoAX_EA5j6&_nc_ht=scontent-lhr6-2.xx&oh=00_AfCJNGV7SwS_IipC7nPp64BQjvrPwlqYxDuug14_fq7SEQ&oe=66043BC9)",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-neutral-content">
        <div className="flex flex-col m-w-screen h-screen justify-around   ">
          <div>
            <h1 className=" text-white text-7xl mt-60 font-bold flex justify-center  text-balance">
              Crystal Palace Bowl
            </h1>
            <div className="flex flex-col justify-center m-20">
              <p className=" text-2xl  text-neutral-400 text-balance text-center ">
                Crystal Palace Bowl is an iconic South London venue, with award
                winning architecture and over 60 years of live music heritage.
              </p>
            </div>
            <div className="flex flex-col justify-center mx-96">
              <button className="btn btn-lg text-white btn-primary ">
                Crowdfunding
              </button>
            </div>
          </div>
          <h1 className=" font-medium text-xl mx-10 flex justify-end  text-slate-300  ">
            SUPORTED BY MAYOR OF LONDON
          </h1>
        </div>
      </div>
    </div>
  );
};
