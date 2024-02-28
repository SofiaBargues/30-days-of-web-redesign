import { feedback } from "../constants";
import styles from "../style";
import Hours from "./Hours";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} gap-24 " `}
  >
    <div />
    <h2 className={styles.heading2}>Opening Hours</h2>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <Hours />
    </div>
  </section>
);

export default Testimonials;
