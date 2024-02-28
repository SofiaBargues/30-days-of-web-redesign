import { Billing } from ".";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section id="Menu" className={layout.section}>
    <div className={`${layout.sectionImg} h-screen `}>
      <Billing />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Our menu</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Experience the vibrant flavors of the Southwest at our Tex-Mex eatery.
        From tangy salsa to creamy guacamole, every dish is a fiesta of taste
        that'll transport you to the heart of Texas.
      </p>

      <button className="btn btn-lg btn-accent my-20">Order Here</button>
    </div>
  </section>
);

export default CardDeal;
