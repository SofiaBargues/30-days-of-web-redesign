import { stats } from "../constants";
import styles from "../style";
import { grid } from "../assets";
<img
  src={grid}
  alt="billing"
  className="w-[100%] h-[100%] rounded-3xl relative z-[5]"
/>;

const Stats = () => (
  <section className="" id="HappyjacksGallery">
    <div className="mx-10 h-screen my-10 card text-center bg-base-300 shadow-2xl">
      <div className=" card-body text-8xl  font-extrabold">
        <span className=" pb-10 [&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
          Happyjacks<br></br>Gallery !
          <br />
        </span>
      </div>
      <figure>
        <img
          src={grid}
          alt="billing"
          className="w-[100%] h-[100%] rounded-3xl relative z-[5]"
        />
      </figure>
    </div>
  </section>
);

export default Stats;
