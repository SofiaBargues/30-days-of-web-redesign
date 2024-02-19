import { c } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="events" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Visiting
        <br className="sm:block hidden" /> Mallydams Wood
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Access to our 55 acre woodland nature reserve is only allowed at one of
        our organised events.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={c} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
