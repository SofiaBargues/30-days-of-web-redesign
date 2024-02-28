import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="features" className={layout.sectionReverse}>
    <div className="diff aspect-[16/9]">
      <div className="diff-item-1">
        <img
          alt="daisy"
          src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
        />
      </div>
      <div className="diff-item-2">
        <img
          alt="daisy"
          src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
          style={{ filter: "blur(5px)" }}
        />
      </div>
      <div className="diff-resizer"></div>
    </div>
  </section>
);

export default Billing;
