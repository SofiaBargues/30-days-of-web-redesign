import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="features" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipPu_FVwbJIC5dR84h4sHJgSa4_DStIte0d68Qak=s680-w680-h510"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
      </div>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Opening Times.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The Club is open on Monday, Tuesday and Wednesday evenings, and Saturday
        morning/Sunday afternoon on a alternating weekly basis.   New members
        must attend a compulsory Safe to Shoot training course on Monday
        evenings before graduating to shoot at other times.
      </p>
    </div>
  </section>
);

export default Billing;
