import { quotes } from "../assets";

const Hours = ({ content, name, title, img }) => (
  <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Kitchen</th>
          <th>Delivery</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>Monday </th>
          <td>12:00</td>
          <td>12:00</td>
        </tr>
        {/* row 2 */}
        <tr className="hover">
          <th>Tuesday </th>
          <td>12:00</td>
          <td>12:00</td>
        </tr>
        {/* row 3 */}
        <tr>
          <th>Wednesday </th>
          <td>12:00</td>
          <td>12:00</td>
        </tr>
        {/* row 1 */}
        <tr>
          <th>Thursday </th>
          <td>12:00</td>
          <td>12:00</td>
        </tr>
        {/* row 2 */}
        <tr className="hover">
          <th>Friday </th>
          <td>12:00</td>
          <td>12:00</td>
        </tr>
        {/* row 3 */}
        <tr>
          <th>Saturday </th>
          <td>12:00</td>
          <td>12:00</td>
        </tr>
        <tr>
          <th>Sunday</th>
          <td>12:00</td>
          <td>12:00</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Hours;
