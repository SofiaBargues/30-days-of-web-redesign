import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./Circles";
import { Proof } from "./Proof";

export const Hero = () => {
  return (
    <div>
      <div
        className="hero h-screen "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1599586120566-886c39306895?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="flex text-center text-white">
          <div className="max-w-md ">
            <h1 className="mb-5 text-6xl text-balance font-bold">
              Tennis Club
            </h1>
            <p className="mb-5 text-xl">
              We offer superb feline accommadation in a safe and loving
              enviroment,we pride ourselves in giving your cat the love and
              attention they require while away from home.
            </p>
            <button className="btn btn-lg btn-neutral  text-white">
              Book your Class
            </button>
            <div className="mt-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
