import { discount, molino } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="relative flex-1 h-full flex flex-col">
      <div
        className="hero h-full flex-1"
        style={{
          backgroundImage: `url(${molino})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="hero-content h-full text-center text-neutral-content  flex flex-col justify-around relative ">
          <div className="max-w-lg">
            <h1 className="mb-5  text-6xl font-bold">
              Jack and Jill Windmills
            </h1>
            <p className="mb-28 text-xl ">
              Our Society, a registered Charity, has fully restored and now
              maintains Jill Windmill - a 19th century corn windmill located at
              Clayton, West Sussex BN6 9PG in the United Kingdom. She is a
              traditional working corn windmill in the South Downs National
              Park.
            </p>
          </div>
          <div className="absolute bottom-5 text-right  left-0 right-0 flex flex-row gap-3 justify-end">
            <p className="">Help the Chattri Memorial Group</p>
            <button className="btn btn-xs btn-primary">Suport Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
