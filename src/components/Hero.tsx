import { restElement } from "@babel/types";
import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/19/7c/a1/aberafon-camp-site.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div>
        <div className="flex w-full">
          <div className="grid flex-grow  h-96 card rounded-box place-items-center">
            <div className="flex flex-col content-between text-center text-neutral-content">
              <div className="max-w-md ">
                <h1 className=" font-extralight mb-14  text-7xl ">
                  Welcome to
                  <br /> HEARTSEAE
                </h1>
              </div>
            </div>
          </div>

          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow h-96 card rounded-box place-items-center">
            <p className="mb-5 text-xl text-balance">
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
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Hello, le!</h3>
                <p className="py-4">Click the button below to close</p>
                <form className="indicator gap-6">
                  <div></div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input w-full max-w-xs"
                  />
                  <input
                    className="input  join-item"
                    type="email"
                    placeholder="Email"
                  />
                </form>

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
