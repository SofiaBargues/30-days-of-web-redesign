import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./Circles";
import { Proof } from "./Proof";

export const Hero = () => {
  return (
    <div className="hero h-[930px] py-10">
      <div>
        <div className="flex ">
          <div className="grid flex-grow mx-10 place-items-center">
            <img
              className="w-full  h-auto"
              src="http://www.hartlepoolgym.co.uk/wp-content/uploads/2016/03/47.jpg"
              alt="Placeholder"
            />
          </div>

          {/* <div className="divider lg:divider-horizontal"></div> */}
          <div className="flex flex-grow my-64 w-96 items-end flex-col gap-6 pl-10">
            <h1 className="mb-4 text-4xl text-balance text-right font-extrabold tracking-tight  text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              HARTLEPOOL GYMNASTICS CLUB
            </h1>
            <p className=" text-lg text-right font-normal text-gray-500 lg:text-xl  dark:text-gray-200">
              Hartlepool Gymnastics Club was founded in July 2006 and has since
              grown to now have over 400 members. We cater for all ages and
              abilities through various classes.
            </p>
            <button
              className="btn btn-lg  btn-info"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Start
            </button>
            <dialog id="my_modal_4" className="modal">
              <form className="w-full max-w-md mx-auto">
                <label
                  htmlFor="default-email"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Email sign-up
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="default-email"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email here..."
                    required=""
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </dialog>
          </div>
          <div className="h-400 py-10 px-6 "></div>
        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
      </div>
      {/* <div className="h-400 bg-slate-50 py-10 px-6 "></div> */}
    </div>
  );
};
