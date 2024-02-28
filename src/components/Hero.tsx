import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} sm:py-0 py-0`}
    >
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            {feedback.map((card) => (
              <FeedbackCard key={card.id} {...card} />
            ))}
          </div>
          <div
            className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
          >
            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              Payment Method.
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
            <button className="btn btn-primary my-20">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
