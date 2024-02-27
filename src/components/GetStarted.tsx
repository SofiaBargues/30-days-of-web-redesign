import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Membership <br className="sm:block hidden" /> Application
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Applications for membership are still welcome, but are subject to a wait
        of several months. ​
      </p>

      <button className="btn btn-lg btn-primary my-20">Apply</button>
    </div>
  </div>
);

export default GetStarted;
