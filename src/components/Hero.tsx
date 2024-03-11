import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Stacks } from "./Stacks";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-around min-h-screen bg-base-200">
      <div className="hero-content text-center my-20">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold">Hello there</h1>
          <p className="py-6 text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      <div className="flex ">
        <Stacks />
      </div>
    </div>
  );
};
