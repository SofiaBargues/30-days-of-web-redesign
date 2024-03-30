import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./About";
import { Cards } from "./Card";

export const Hero = () => {
  return (
    <div className="hero min-h-[800px] bg-[#ffd500] ">
      <div className="hero-content flex-col lg:flex-row">
        <label className="swap">
          <input type="checkbox" className="hidden" />
          <div className="swap-on">
            <div className=" ">
              <img
                src="https://static.wixstatic.com/media/29f523_45e7c7b98b134fbca70d49caf42a1bd1~mv2.png/v1/fill/w_600,h_380,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/29f523_45e7c7b98b134fbca70d49caf42a1bd1~mv2.png"
                className=""
              />
            </div>
          </div>
          <div className="swap-off">
            <img
              src="https://static.wixstatic.com/media/59d2f4_f086fff0f5c24080bb07f6569b5b7a26~mv2.png/v1/fill/w_453,h_352,al_c,lg_1,q_85,enc_auto/guayma-de-oro.png"
              className=""
            />
          </div>
        </label>
        <div>
          <h1 className="text-9xl max-w-lg font-black text-white">
            El Alfajor de Lujo!
          </h1>
          <p className="py-6 text-white text-5xl max-w-xl">
            El que te acompaña desde siempre.
            <span className="py-6 text-red-700 text-5xl font-black max-w-xl">
              El clásico de la familia.
            </span>
          </p>

          <button className="btn btn-lg  btn-primary text-white my-10">
            Pedilos Aca!
          </button>
        </div>
      </div>
    </div>
  );
};
