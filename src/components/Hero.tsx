import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-0 `}>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://texasrestaurant.co.uk/cf-cgi/families/1528/resource-types/web-background.png?width=640&height=360&fit=cover&format=auto&quality=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center text-neutral-content my-10">
          <div className="max-w-2xl h-full">
            <h1 className="my-20 text-5xl font-semibold">
              Order now and enjoy
              <br />
              <span className="mb-5 text-8xl font-bold"> free delivery</span>
            </h1>
            <p className="mb-5 text-2xl font-bold">
              If you have a food allergy or intolerance phone the restaurant on
              02030920953.
            </p>
            <button className="btn btn-lg btn-primary">Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
