import styles from "../style";
import { banner } from "../assets";
import GetStarted from "./GetStarted";
import { Stats } from ".";

const Hero = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80 "></div>
      <div className="hero-content text-center text-neutral-content h-full">
        {/* hasta aca fueron cosas de daisy */}
        <div className="flex justify-between flex-col h-full py-20 ">
          <div className="p-20 max-w-md fleitems-center	">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Hero;
