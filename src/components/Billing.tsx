import { sponsorship } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="hours" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={sponsorship}
        alt="billing"
        className=" rounded-2xl relative w-[100%] h-[100%] z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Opening hours are <br></br>9 am to 5 pm
        <br className="sm:block hidden" /> Mallydams Wood
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Is a well established wildlife rehabilitation centre, education centre
        and woodland nature reserve in the South East of England, covering Kent,
        Sussex and Hampshire.
      </p>
    </div>
  </section>
);

export default Billing;
