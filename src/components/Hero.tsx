import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Stacks } from "./Stacks";
import VideoComponent from "./VideoComponent";

export const Hero = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="hero relative py-3 py-xl-4 sm:mx-auto md:mb-10 ">
          <VideoComponent />
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1
                className="mb-5 text-5xl text-black font-extrabold
            
            "
              >
                Hello there
              </h1>
              <p className="mb-5  text-black font-bold">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-0 ">
        <Stacks />;
      </div>
    </div>
  );
};
