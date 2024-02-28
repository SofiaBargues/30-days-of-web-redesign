import {
  apple,
  a71,
  a72,
  a73,
  a74,
  a75,
  a76,
  a77,
  bill,
  google,
} from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="features" className={layout.sectionReverse}>
    <div className="w-96  ">
      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full w-full">
          <img src={a71} alt="hoobank" />
        </div>
        <div className="carousel-item h-full">
          <img src={a71} alt="hoobank" />
        </div>
        <div className="carousel-item h-full">
          <img src={a77} alt="hoobank" />
        </div>
        <div className="carousel-item h-full">
          <img src={a71} alt="hoobank" />
        </div>
        <div className="carousel-item h-full">
          <img src={a77} alt="hoobank" />
        </div>
        <div className="carousel-item h-full">
          <img src={a77} alt="hoobank" />
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
