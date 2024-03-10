import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";

export const Hero = () => {
  return (
    <section id="home">
      <div
        className="hero h-full w-screen"
        style={{
          backgroundImage:
            "url(https://www.totternhoememorialhall.com/uploads/7/1/3/6/71365849/whatsapp-image-2020-11-08-at-11-10-54-8.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="flex flex-col hero-content pb-10 justify-end h-full text-center text-white">
          <div className="max-w-2xl text-balance p-20 ">
            <h1 className=" text-5xl pb-10 font-medium">
              Your village-your Hall!
            </h1>
            <p className="mb-5 text-xl font-light">
              The Memorial Hall was opened in 1928 and dedicated as a memorial
              to those villagers who were killed in the First World War. Now a
              days is maintained by trustees and run by a volunteer committee.
            </p>
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn btn-outline mt-10 font-extrabold"
                >
                  More Information
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu py-40 gap-10  w-80 text-2xl  min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Winter Beer Festival</a>
                  </li>
                  <li>
                    <a>Remembrance</a>
                  </li>
                  <li>
                    <a>The Bar</a>
                  </li>
                  <li>
                    <a>Al Fresco</a>
                  </li>
                  <li>
                    <a>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
