// import { logo } from "../assets";

export const Circles = () => (
  <section>
    <div className="h-400 py-10 px-6 ">
      <div className="grid grid-cols-3 gap-4">
        <div className="dropdown dropdown-hover relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <button
            className=""
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <div className="relative group">
              <img
                className="w-52 h-52 rounded-full"
                src="https://www.pettcamping.com/wp-content/uploads/go-x/u/1cf39f6e-7817-4979-91a6-03da764a4d70/l105,t140,w1290,h1720/image-320x427.jpg"
                alt="Placeholder"
              />

              <div className="absolute inset-0 w-52 h-52 rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <p className="text-white  text-3xl  font-extralight">
                  Campfires
                </p>
              </div>
            </div>
          </button>

          <dialog id="my_modal_2" className="modal text-accent transition-none">
            <div className="modal-box text-balance">
              <h3 className="font-bold text-lg">The basics</h3>
              <p className="py-4">
                Compost toilets are provided in all the camping fields with
                toilet paper provided The cold water standpipe is situated
                towards the south of the site, at the main entrance from Pett
                Road Rubbish and recycling bins provided Check-in between 2-8pm
                Check-out by 11am No pets or no electronic music
              </p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <div className="dropdown dropdown-hover relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <button
            className=""
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <dialog
              id="my_modal_3"
              className="modal text-accent  transition-none"
            >
              <div className="modal-box text-balance">
                <h3 className="font-bold text-lg">Campfires</h3>
                <p className="py-4">
                  The camping fields are flowering meadows, part of an
                  envirionmental farming scheme, so the ground must be left
                  undisturbed You are welcome to bring your own raised fire pit
                  and wood for your campfire experience.
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div className="relative group">
              <img
                className="w-52 h-52 rounded-full"
                src="https://www.pettcamping.com/wp-content/uploads/go-x/u/1e892494-2842-493a-8e1d-e7d1d2d94bf3/l438,t0,w1125,h1500/image-320x427.jpg"
                alt="Placeholder"
              />

              <div className="absolute inset-0 w-52 h-52 rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <p className="text-white  text-3xl  font-extralight">
                  Campfires
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="dropdown dropdown-hover relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <button
            className=""
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            <dialog
              id="my_modal_1"
              className="modal text-accent  transition-none"
            >
              <div className="modal-box text-balance">
                <h3 className="font-bold text-lg">Parking</h3>
                <p className="py-4">
                  You are welcome to park where you pitch but to keep things
                  quiet for your camping neighbours, no vehicle movements are
                  permitted after 10pm One car per booking is included and
                  additional cars can be added to your booking for a small
                  charge Small campervans are permitted
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div className="relative group">
              <img
                className="w-52 h-52 rounded-full"
                src="https://www.pettcamping.com/wp-content/uploads/go-x/u/1db694e9-25e5-4735-a800-34ef815dda66/l0,t0,w1500,h2000/image-320x427.jpg"
                alt="Placeholder"
              />

              <div className="absolute inset-0 w-52 h-52 rounded-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                <p className="text-white  text-3xl  font-extralight">Parking</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
);
