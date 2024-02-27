import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-0 `}>
      <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20 ">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipOcuBplyGHg7Y3acI3ipv5MXqpAbBlL4Jl8ZkwK=s680-w680-h510"
            className="max-w-full max-h-full  rounded-lg shadow-2xl"
          />
          <div className={`flex-1 ${styles.flexStart} flex-col my-0  `}>
            <h1 className="font-poppins font-semibold ss:text-[98px] text-[152px] text-white  ">
              Addiscombe<br></br> Rifle Club
            </h1>
            <p
              className={`${styles.paragraph} ss:text-[30px] text-[30px] mt-5 text-balance`}
            >
              Visits from potential new members are welcomed but please note,
              due to ongoing delays with the processing of police checks, there
              will be a wait of several months between applying for membership
              and starting Safe to Shoot training.
            </p>
            <button className="btn  btn-lg btn-primary my-20">Log In</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
