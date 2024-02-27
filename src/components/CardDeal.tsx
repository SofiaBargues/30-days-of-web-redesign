import { Billing } from ".";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionImg}>
      <Billing />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Membership <br className="sm:block hidden" /> Application
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Applications for membership are still welcome, but are subject to a wait
        of several months. ​
      </p>

      <button className="btn btn-lg btn-primary my-20">Apply</button>
    </div>
  </section>
);

export default CardDeal;
