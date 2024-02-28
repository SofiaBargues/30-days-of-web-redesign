import styles from "../style";
import { a1, a2, a3, a4, a5, a0 } from "../assets";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <div className="h-96 carousel carousel-vertical rounded-box">
          <div className="carousel-item h-full">
            <img src={a1} alt="billing" className="w-[100%] h-[100%]" />
          </div>
          <div className="carousel-item h-full">
            <img src={a0} alt="billing" className="w-[100%] h-[100%]" />
          </div>
          <div className="carousel-item h-full">
            <img src={a2} alt="billing" className="w-[100%] h-[100%]" />{" "}
          </div>
          <div className="carousel-item h-full">
            <img src={a3} alt="billing" className="w-[100%] h-[100%]" />{" "}
          </div>
          <div className="carousel-item h-full">
            <img src={a4} alt="billing" className="w-[100%] h-[100%]" />{" "}
          </div>
          <div className="carousel-item h-full">
            <img src={a5} alt="billing" className="w-[100%] h-[100%]" />{" "}
          </div>
          <div className="carousel-item h-full">
            <img src={a3} alt="billing" className="w-[100%] h-[100%]" />{" "}
          </div>
        </div>
      </div>
    </div>

    {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div> */}
  </section>
);

export default Testimonials;
