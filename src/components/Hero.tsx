import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";

export const Hero = () => {
  return (
    <section id="home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1520887765234-50c138bba976?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="grid grid-col py-10 hero-content text-center text-neutral-content">
          <div className="max-w-md mx-48 mb-40">
            <h1 className="mb-5 text-5xl font-bold">Brighton Fishing Museum</h1>
            <p className="mb-5">
              Come take a journey with us into the rich history of Brighton’s
              Fishing Community. Discover a Brighton of the past: a bustling
              little fishing village on the south coast which was transformed
              into a fashionable seaside resort.
            </p>
            <button className="text-white  btn btn-info">Visit Us</button>
          </div>
          <Squares />
        </div>
      </div>
    </section>
  );
};
