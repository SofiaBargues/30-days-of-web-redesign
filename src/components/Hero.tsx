import { discount, robot } from "../assets";
import { Squares } from "./Scuares";

export const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/299942213_201469218885831_7580266301194550687_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YUfIpaEPc6wAX_E7lzU&_nc_ht=scontent-lhr8-2.xx&oh=00_AfDu3CZFghcJTbCJ3624ZoDmjU_jb9qQxygoB2IvLKfgqw&oe=65EF9F93)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-7 font-extralight  text-7xl font-bold">
            BLUEGATE FARM
            <br /> HOLIDAY COTTAGES
          </h1>
          <p className="mb-5">
            Bluegate Farm Holiday Cottages have been stunningly converted from
            our 18th Century red brick barn to two idyllic self catering holiday
            cottages in the middle of the countryside. Situated on a working
            farm in the quiet village of Stanbridge in Bedfordshire we are
            treated to the beautiful far reaching views of the Chiltern hills.
          </p>

          {/* The button to open modal */}
          <label htmlFor="my_modal_7" className="btn">
            open modal
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <div className="hero text-primary-content">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">To Book contact us!</h1>
                    <p className="py-6">
                      <p className=" font-bold"> Prices per week:</p>
                      <br /> January, February, March, November & December £550
                      <br /> April, May, June, September & October £600 <br />
                      July & August £680 <br />
                      Christmas and New Year weeks are also £680.
                    </p>
                  </div>
                  <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                    <form className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="email"
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
      </div>
      <Squares />
    </div>
  );
};
