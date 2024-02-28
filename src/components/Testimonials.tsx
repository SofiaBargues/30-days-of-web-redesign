import { feedback } from "../constants";
import styles from "../style";
import Hours from "./Hours";

const Testimonials = () => (
  <section
    id="Hours"
    className={`${styles.paddingY} ${styles.flexCenter} h-screen " `}
  >
    <div />
    <h2 className={`${styles.heading2}`}>Opening Hours</h2>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="hover:bg-accent">
            <th></th>
            <th>Kitchen</th>
            <th>Delivery</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover:bg-accent">
            <th>Monday </th>
            <td>12:00</td>
            <td>12:00</td>
          </tr>
          {/* row 2 */}
          <tr className="hover:bg-accent">
            <th>Tuesday </th>
            <td>12:00</td>
            <td>12:00</td>
          </tr>
          {/* row 3 */}
          <tr className="hover:bg-accent">
            <th>Wednesday </th>
            <td>12:00</td>
            <td>12:00</td>
          </tr>
          {/* row 1 */}
          <tr className="hover:bg-accent">
            <th>Thursday </th>
            <td>12:00</td>
            <td>12:00</td>
          </tr>
          {/* row 2 */}
          <tr className="hover:bg-accent">
            <th>Friday </th>
            <td>12:00</td>
            <td>12:00</td>
          </tr>
          {/* row 3 */}
          <tr className="hover:bg-accent">
            <th>Saturday </th>
            <td>12:00</td>
            <td>12:00</td>
          </tr>
          <tr className="hover:bg-accent">
            <th>Sunday</th>
            <td>12:00</td>
            <td>12:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default Testimonials;
