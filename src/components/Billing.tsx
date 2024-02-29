import { apple, bill, grid } from "../assets";
import styles, { layout } from "../style";
import CssGrid from "./CssGrid";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}></div>

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
