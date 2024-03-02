import { discount, molino } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="relative  flex-1 min-h-screen flex flex-col">
      <div
        className="hero h-full flex-1"
        style={{
          backgroundImage: `url(${molino})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="hero-content h-full text-center text-neutral-content  flex flex-col justify-around relative ">
          <div className="max-w-lg">
            <h1 className="mb-5 text-white text-6xl font-bold">
              Jack and Jill Windmills
            </h1>
            <p className="mb-64 text-xl ">
              Our Society, a registered Charity, has fully restored and now
              maintains Jill Windmill - a 19th century corn windmill located at
              Clayton, West Sussex BN6 9PG in the United Kingdom. She is a
              traditional working corn windmill in the South Downs National
              Park.
            </p>
            <button
              className="btn mb-20 btn-lg btn-accent"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Visit Us
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className=" btn-outline btn btn-sm text-accent btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg text-neutral">Book</h3>
                <p className="py-4 text-neutral ">
                  Please fill the form for your reservation.
                </p>

                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow text-neutral"
                    placeholder="Name"
                  />
                </label>
                <label className=" my-6 input  input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow text-neutral"
                    placeholder="Date"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
                <label className=" input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow text-neutral"
                    placeholder="Email"
                  />
                </label>

                <form method="dialog" method="dialogo " className="join mt-6">
                  <button className="btn btn-primary join-item">Send</button>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
