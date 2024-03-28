import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./About";
import { Cards } from "./Card";

export const Hero = () => {
  return (
    <div className=" bg-[#ffd500] ">
      <div className="flex flex-row-2">
        <label className="swap swap-flip text-9xl">
          <input type="checkbox" className="hidden" />

          <div className="swap-on ">
            <div className="grid grid-cols-2">
              <div className="w-[1000px]">
                <img
                  src="https://static.wixstatic.com/media/29f523_45e7c7b98b134fbca70d49caf42a1bd1~mv2.png/v1/fill/w_600,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/29f523_45e7c7b98b134fbca70d49caf42a1bd1~mv2.png"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="swap-off ">
            <div className=" items-center">
              <img
                src="https://static.wixstatic.com/media/29f523_17e3bbe87f0f4aee976911f8de492327~mv2.png/v1/fill/w_110,h_111,al_c,q_85,enc_auto/29f523_17e3bbe87f0f4aee976911f8de492327~mv2.png"
                className=""
              />
              <img
                src="https://static.wixstatic.com/media/59d2f4_f086fff0f5c24080bb07f6569b5b7a26~mv2.png/v1/fill/w_453,h_352,al_c,lg_1,q_85,enc_auto/guayma-de-oro.png"
                className=""
              />
            </div>
          </div>
        </label>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6 max-w-[600px]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>

          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
