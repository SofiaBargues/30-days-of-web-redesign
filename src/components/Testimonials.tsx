import styles from "../style";
import { a1, a2, a3, a4, a5, a0 } from "../assets";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";

const Testimonials = () => (
  <section id="clients" className={`my-11 mx-11 flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
