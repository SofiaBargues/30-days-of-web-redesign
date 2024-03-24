import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Stacks } from "./Stacks";
import VideoComponent from "./VideoComponent";

export const HeroCopy = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="hero relative py-3 py-xl-4 sm:mx-auto md:mb-10 ">
          <VideoComponent />
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1
                className="mb-5 text-5xl text-balance text-white font-extrabold
            
            "
              >
                Representing the exceptional
              </h1>
              <p className="mb-5  text-white font-bold text-balance">
                We are a talent agency specialised in the personal
                representation of actors and creatives within the theatre,
                television and film industry.
              </p>
              <button className="btn btn-primary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-0 "><Stacks /></div> */}
    </div>
  );
};
