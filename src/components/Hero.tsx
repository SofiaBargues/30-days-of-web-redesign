import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";

export const Hero = () => {
  return (
    <div
      className="hero  min-h-screen"
      style={{
        backgroundImage:
          "url(https://lh3.googleusercontent.com/p/AF1QipNrAOnSTv8CLFAMJ-I5qRDCNM5vFK077UMUlTxN=s680-w680-h510)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="flex flex-col content-between text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-7 font-extralight  text-7xl ">
            THE WHITE
            <br /> LION HOTEL
          </h1>
          <p className="mb-5 text-xl">
            Seaford is one of the best kept secrets on the South Coast and The
            White Lion Hotel offers everything you need to enjoy the area in
            comfort.
          </p>
          <div className="join flex justify-center mt-20">
            <div>
              <div>
                <input
                  className="input input-bordered  text-slate-700 join-item"
                  placeholder="Date"
                />
              </div>
            </div>
            <select className="select select-bordered text-slate-700 join-item">
              <option disabled selected>
                Room
              </option>
              <option>Double Room, Sea Views.</option>
              <option>Family Room</option>
              <option>Single Room, With Ensuite</option>
            </select>
            <div className="indicator">
              <button className="btn join-item">Search</button>
            </div>
            <input
              className="input input-bordered join-item"
              placeholder="Email"
            />
            <button className="btn join-item rounded-r-full">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
