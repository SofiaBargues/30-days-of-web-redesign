import { Billing } from ".";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionImg}>
      <Billing />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Our menu</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Experience the vibrant flavors of the Southwest at our Tex-Mex eatery.
        From tangy salsa to creamy guacamole, every dish is a fiesta of taste
        that'll transport you to the heart of Texas.
      </p>

      <button className="btn btn-lg btn-primary my-20">Apply</button>
    </div>
  </section>
);

export default CardDeal;
