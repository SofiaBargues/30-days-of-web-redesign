import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./Circles";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/19/7c/a1/aberafon-camp-site.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 "></div>
      <div>
        <div className="flex w-full">
          <div className="grid flex-grow   h-96 card rounded-box place-items-center">
            <div className="flex flex-col content-between text-center text-neutral-content">
              <div className="max-w-md mx-20 ">
                <h1 className=" font-extralight mb-14  text-7xl ">
                  Welcome to
                  <br /> HEARTSEAE
                </h1>
              </div>
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow my-10 card rounded-box place-items-center">
            <p className=" text-xl text-balance">
              Situated in its own secluded woodland grounds in the West Wickham
              area, Heartsease Girlguiding House is an ideal base.
            </p>{" "}
            <button
              className="btn  btn-lg"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Book
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl  bg-base-content">
                <div className="flex w-full">
                  <div className="grid h-20 flex-grow text-black rounded-box place-items-center">
                    <h3 className="font-bold text-lg">Hello Camper!</h3>
                    <p className="py-4">Tell us about your next vacation</p>
                  </div>

                  <div className="grid h-20 flex-grow place-items-center">
                    <form className="indicator m-6 ">
                      <div>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input w-full max-w-xs mb-6"
                        />
                        <input
                          className="input  join-item"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn bg-neutral">Send</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}
      </div>
    </div>
  );
};
