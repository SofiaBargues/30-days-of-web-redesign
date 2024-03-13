// import { logo } from "../assets";

export const Squares = () => (
  <section>
    <div className=" ">
      <div className="grid grid-cols-1">
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 ">
          <div className="relative group">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-lg  btn-ghost text-4xl btn-outline  btn-secondary"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              📍
            </button>
            <dialog
              id="my_modal_1"
              className="modal text-center text-primary-content"
            >
              <div className="modal-box">
                <h3 className="font-bold  text-lg">Find Us</h3>
                <p className="py-4">
                  🖈 Leighton Buzzard, Bedfordshire LU7 9JD United Kingdom
                </p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </figure>

        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 ">
          <div className="relative group">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-ghost btn-lg text-4xl  btn-outline  btn-secondary"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              🔎
            </button>
            <dialog id="my_modal_2" className="modal text-secondary p-20">
              <div className="">
                <div className="card w-auto text-center m-10 bg-base-100 shadow-md image-full">
                  <figure>
                    <img src="http://www.girlguiding-heartsease.org.uk/uploads/4/0/8/9/40899669/published/output-3.png?1679330491" />
                  </figure>
                  <div className="card-body gap-32">
                    <h2 className="card-title mt-11 text-5xl ">About Us</h2>
                    <p className="text-xl">
                      As well as our farming responsibilities we all hove our
                      own diversifications. Donald and Callum do various
                      creative and structural building projects. Glenn has his
                      own Agricultural Engineering company that is based on the
                      farm. Philippa has a bakery & chocolatery on the farm
                      where she makes the most wonderful creations for Amy's
                      coffee shop Tiki's which is in Hemel Hempstead. Together
                      they also have a mobile coffee business called Black Cow
                      Coffee which they take out to events selling the most
                      amazing coffee and baked goods.
                    </p>
                    <div className="card-actions justify-end"></div>
                  </div>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </figure>

        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 ">
          <div className="relative group">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-lg  btn-ghost text-4xl  btn-outline  btn-secondary"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              🏡
            </button>
            <dialog id="my_modal_3" className="modal text-secondary">
              <div className="modax">
                <h3 className="font-bold  text-white pb-10 text-5xl">
                  The Cottages
                </h3>
                <div className="h-96 carousel carousel-vertical rounded-box">
                  <div className="carousel-item h-full">
                    <img src="https://www.countrycottagesonline.net/thumbs/730x410_new5/project/images/uploadedimages/234_1534334957.jpg" />
                  </div>
                  <div className="carousel-item h-full">
                    <img src="https://www.countrycottagesonline.net/thumbs/730x410_new5/project/images/uploadedimages/234_1534334964.jpg" />
                  </div>
                  <div className="carousel-item h-full">
                    <img src="https://www.countrycottagesonline.net/thumbs/730x410_new5/project/images/uploadedimages/234_1534334967.jpg" />
                  </div>
                  <div className="carousel-item h-full">
                    <img src="https://www.countrycottagesonline.net/thumbs/730x410_new5/project/images/uploadedimages/234_1534334944.jpg" />
                  </div>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </figure>

        <figure className="relative px-20 max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
          <div className="relative group">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-lg  btn-ghost text-4xl  btn-outline  btn-secondary"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              ➕
            </button>
            <dialog id="my_modal_4" className="modal text-secondary">
              <div className="modal-box text-neutral">
                <h3 className="font-bold  text-3xl p-6">Facilities:</h3>
                <div className="overflow-x-auto">
                  <table className="table">
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>✅</th>
                        <td>Parking</td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <th>✅</th>
                        <td>Fully equipped kitchen</td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <th>✅</th>
                        <td>WiFi</td>
                      </tr>
                      <tr>
                        <th>❌</th>
                        <td>Smoking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </figure>
      </div>
    </div>
  </section>
);
