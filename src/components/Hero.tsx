import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";

export const Hero = () => {
  return (
    <section id="home">
      <div
        className="hero h-full"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1520887765234-50c138bba976?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="grid grid-col hero-content text-center text-neutral-content">
          <div className="max-w-2xl mx-48 mb-10">
            <h1 className="mb-5 text-5xl font-extralight">
              Rustic Pop-up Campsite
              <br /> Pett, East Sussex
            </h1>
            <p className="mb-5">
              Private, family friendly site surrounded by farmland Each year,
              once the hay has been harvested, we are able to offer Summer
              pop-up camping in August, in the Spring Meadow and the Big Meadow.
              These are grazed, flowering meadows part of nearby Lunsford Farm
            </p>
            <button className="text-white  m-10 btn btn-lg btn-accent">
              Visit Us
            </button>
          </div>
          <Squares />
        </div>
      </div>
    </section>
  );
};
