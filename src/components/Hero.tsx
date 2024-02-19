import styles from "../style";
import { banner } from "../assets";
import GetStarted from "./GetStarted";
import { Stats } from ".";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70 "></div>
      <div className="hero-content text-center text-neutral-content h-full">
        {/* hasta aca fueron cosas de daisy */}
        <div className="flex justify-between items-center	 flex-col h-full py-20	">
          <div className="p-20 max-w-2xl ">
            <h1 className="mb-5 text-7xl font-bold">Mallydams Wood</h1>
            <p className="mb-5">
              Animal neglect and abandonment are at a three-year high. We must
              come together for the animals who need us. Will you help us?
            </p>
            <Button styles={`mt-10`} />
          </div>
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Hero;
