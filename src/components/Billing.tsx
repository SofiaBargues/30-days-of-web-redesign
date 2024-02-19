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
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
    </div>
  </section>
);

export default Billing;
