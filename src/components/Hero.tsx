import { discount, robot } from "../assets";

export const Hero = () => {
  return (
    <section id="home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.pettcamping.com/wp-content/uploads/go-x/u/1e892494-2842-493a-8e1d-e7d1d2d94bf3/l438,t0,w1125,h1500/image-768x1024.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Brighton Fishing Museum</h1>
            <p className="mb-5">
              Come take a journey with us into the rich history of Brighton’s
              Fishing Community. Discover a Brighton of the past: a bustling
              little fishing village on the south coast which was transformed
              into a fashionable seaside resort.
            </p>
            <button className="text-white  btn btn-info">Visit Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};
