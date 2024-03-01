import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const About = () => (
  <section id="AboutUs" className="my-40 mx-96">
    <div className="card w-96 bg-base-100 shadow-2xl image-full">
      <figure>
        <img
          src="https://happyjackssoftplay.co.uk/wp-content/uploads/2020/05/monkey.swing_.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">About Us</h2>
        <p>
          With over 10 years experience and more than 30 years qualified as a
          gymnastics coach, we are confident that we can not only provide you
          with an amazing safe environment for your child to play but also work
          with you to provide a great play space to entertain children at home,
          your event or party venue.
        </p>
      </div>
    </div>
  </section>
);

export default About;
