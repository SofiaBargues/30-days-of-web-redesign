// import { logo } from "../assets";

export const Squares = () => (
  <section>
    <div className=" ">
      <div className="grid grid-cols-1 gap-6">
        <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 ">
          <div className="relative group">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-lg  btn-ghost text-4xl  btn-secondary"
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
              className="btn btn-ghost btn-lg text-4xl    btn-secondary"
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
              className="btn btn-lg  btn-ghost text-4xl   btn-secondary"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              🏡
            </button>

            <dialog id="my_modal_3" className="modal ">
              <div className="modax">
                <h3 className="font-bold  text-center pb-10 text-5xl">
                  Heartsease
                </h3>
                <div className="h-96 w-full  carousel carousel-vertical ">
                  <div className="carousel-item h-full">
                    <img src="http://www.girlguiding-heartsease.org.uk/uploads/4/0/8/9/40899669/newest-outdoor-pic2_orig.jpg" />
                  </div>
                  {/* <div className="carousel-item h-full">
                    <img src="http://www.girlguiding-heartsease.org.uk/uploads/4/0/8/9/40899669/2156710.jpg?250" />
                  </div> */}
                  <div className="carousel-item h-full">
                    <img src="http://www.girlguiding-heartsease.org.uk/uploads/4/0/8/9/40899669/editor/heartsease-bathroom-2017.jpg?250" />
                  </div>
                  {/* <div className="carousel-item h-full">
                    <img src="http://www.girlguiding-heartsease.org.uk/uploads/4/0/8/9/40899669/published/img-0369_1.jpg?1536525923" />
                  </div> */}
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
              className="btn btn-lg  btn-ghost text-4xl    btn-secondary"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              🚶‍♀️
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box">
                <h3 className="font-bold  text-3xl text-center p-6">
                  Activities
                </h3>
                <div className="overflow-x-auto">
                  <table className="table">
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>On-site</th>
                        <td>
                          The woodland grounds at Heartsease offer opportunities
                          for lots of outdoor activities including den-building,
                          barbecues, tree trails and scavenger hunts. It is also
                          the perfect location to complete activities in order
                          to gain LaSER's 'Growing up wild - in the woods' paw
                          print badge. The large indoor space is perfect for
                          craft or drama activities, first aid demonstrations or
                          leader trainings.
                        </td>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <th>Nearby</th>
                        <td>
                          West Wickham Swimming Pools are close by (15 minute
                          walk), and Crystal Palace Park with the Girlguiding
                          Centenary Maze is also easily accessible (194 bus to
                          Penge, then a 10 minute walk). Buses also take you to
                          Croydon, Beckenham and Bromley.
                        </td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <th>London</th>
                        <td>
                          Located in the London suburb of West Wickham,
                          Heartsease is the perfect base for those travelling
                          from further afield and wanting to explore the
                          capital. West Wickham station is a 15 minute walk from
                          Heartsease and has four trains an hour to Central
                          London during the day.
                        </td>
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
