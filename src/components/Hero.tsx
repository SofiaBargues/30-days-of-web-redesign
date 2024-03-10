import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Proof } from "./Proof";
import { Squares } from "./Scuares";

export const Hero = () => {
  return (
    <section className="bg-accent">
      <div className="max-w-screen-xl grid-cols-2">
        <div>
          <iframe
            className="mt- mb- mx-auto w-full max-h-60 rounded-none lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
            src="https://www.youtube.com/embed/CJuQ5zUvWBU?si=hJFTEGxj8IZ6Ty8y&amp;start=9"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
        </div>
        <div className="my-16">
          <Proof />
        </div>
        <div
          id="mega-menu-full-dropdown"
          className="flex justify-center md:bg-white  "
        >
          <div className=" mx-6 max-w-screen-xl flex justify-center text-center text-balance    dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
              <li>
                <a
                  href="#"
                  className="block p-3 rounded-lg  dark:hover:bg-accent-content"
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
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-content"
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
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-content"
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
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-content"
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
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-content"
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
                  className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-accent-content"
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
      </div>
    </section>
  );
};
