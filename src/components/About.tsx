import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const About = () => (
  <section id="AboutUs">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Click
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact w-64 p-10 shadow bg-primary text-primary-content"
      >
        <div className="card-body">
          <h3 className="card-title">Card title!</h3>
          <p>you can use any element as a dropdown.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
