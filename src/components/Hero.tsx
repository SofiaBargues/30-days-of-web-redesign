import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://lh3.googleusercontent.com/p/AF1QipNrAOnSTv8CLFAMJ-I5qRDCNM5vFK077UMUlTxN=s680-w680-h510)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div>
        <div className="flex w-full">
          <div className="grid flex-grow  h-96 card rounded-box place-items-center">
            <div className="flex flex-col content-between text-balance text-neutral-content">
              <div className="max-w-sm ">
                <h1 className=" font-extralight mb-14  text-7xl ">
                  Welcome to
                  <br /> HEARTSEAE
                </h1>
                <p className="mb-5 text-xl text-balance">
                  Situated in its own secluded woodland grounds in the West
                  Wickham area, Heartsease Girlguiding House is an ideal base.
                </p>
              </div>
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow h-96 card rounded-box place-items-center">
            <Squares />
          </div>
        </div>
        <div className="join mt-20">
          <div>
            <div>
              <input
                type="date"
                className="input  join-item"
                placeholder="Date"
              />
            </div>
          </div>
          <form>
            <select className="select   join-item">
              <option disabled selected>
                Campers
              </option>
              <option>10 to 20</option>
              <option>20 to 40</option>
              <option>40 to 50</option>
            </select>
            <div className="indicator"></div>
            <input
              className="input  join-item"
              type="email"
              placeholder="Email"
            />

            <button className="btn join-item rounded-full">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
