import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./Circles";
import { Proof } from "./Proof";

export const Hero = () => {
  return (
    <div
      className="hero h-[510px]"
      style={{
        backgroundImage:
          "url(https://www.tigi-tabu-cattery.co.uk/s/cc_images/cache_2496786958.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content  text-center text-white">
        <div className="max-w-md ">
          <h1 className="mb-5 text-6xl text-balance font-bold">
            Holidays? Not problem!
          </h1>
          <p className="mb-5 text-xl">
            We offer superb feline accommadation in a safe and loving
            enviroment,we pride ourselves in giving your cat the love and
            attention they require while away from home.
          </p>
          <button className="btn btn-lg btn-neutral  text-white">Book</button>
        </div>
      </div>
    </div>
  );
};
