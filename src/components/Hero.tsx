import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Proof } from "./Proof";
import { Squares } from "./Scuares";

export const Hero = () => {
  return (
    <section className="bg-accent w-screen">
      <div className="max-w-screen-xl grid-cols-2">
        <div className="mt-3"></div>
        <div id="mega-menu-full-dropdown " className="flex justify-center   ">
          <div className=" m-20 min-w-screen flex justify-center text-center text-balance   text-white grid-cols-2 ">
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-6  rounded-lg  dark:hover:bg-accent-content"
                >
                  <div className="font-semibold">Booking</div>
                  <span className="text-sm ">
                    Details for individuals or small groups.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-content"
                >
                  <div className="font-semibold">
                    Fundraising and Volunteering.
                  </div>
                  <span className="text-sm ">
                    Them helped various charities, for example Macmillan Cancer
                    Support.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-content"
                >
                  <div className="font-semibold">Gargen Visits in 2024.</div>
                  <span className="text-sm ">
                    Open from 1st June until 31st July 2024.
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-content"
                >
                  <div className=" font-semibold">Online Stores</div>
                  <span className="text-sm ">
                    Connect with third-party tools that you're already using.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-content"
                >
                  <div className="font-semibold">The Argus</div>
                  <span className="text-sm ">
                    Our gardening article, every Saturday.
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-content"
                >
                  <div className="font-semibold">Our Visitors</div>
                  <span className="text-sm ">
                    Selection of comments by visitors.
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Proof />
      </div>
    </section>
  );
};
