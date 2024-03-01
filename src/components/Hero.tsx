import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/997647042/photo/selective-focus-on-colorful-balls-in-pool-on-the-children-playgr.jpg?s=612x612&w=0&k=20&c=znlJ2Ldi3_n7ohyBhBeFebTk96xCT1gN9yazD2FGCeo=)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Treat Your Little Monkeys!
            </h1>
            <p className="mb-5">
              Proffesional soft play for under 5's in east Sussex & <br></br>
              gymnastics based play sessions for under 5's in Eastbourne and
              Surronding areas.
            </p>
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
