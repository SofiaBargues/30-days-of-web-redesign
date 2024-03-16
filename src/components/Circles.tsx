// import { logo } from "../assets";

export const Circles = () => (
  <section>
    <div>
      <div className="h-auto px-6  ">
        <div className="grid  grid-cols-3 gap-4">
          <div className="dropdown dropdown-hover bg-primary text-slate-100   relative max-w-sm transition-all duration-300 ">
            <div className="card card-body ">
              <h2 className=" card-title">Pre-School Classes</h2>
            </div>
            <img
              src="http://www.hartlepoolgym.co.uk/wp-content/uploads/2021/07/General-temp-pic.jpeg"
              alt="Shoes"
            />
            <div className="card-body ">
              <p>
                Classes are open to any toddler from crawling to 4 years.
                Children are introduced to music, basic rhythm and physical
                development. Children are encouraged to explore the gym and to
                discover and develop their physical abilities.
              </p>
            </div>
          </div>
          <div className="dropdown dropdown-hover  bg-primary text-slate-100 relative max-w-sm transition-all duration-300 ">
            <div className="card-body">
              <h2 className="card-title">Recreational Classes</h2>
            </div>
            <figure>
              <img
                src="http://www.hartlepoolgym.co.uk/wp-content/uploads/2021/07/Temp-Rec-pic.jpeg"
                alt="Shoes"
              />
              <div className="card-body ">
                <p>
                  These classes are based on the British Gymnastics awards
                  scheme. Class times are age-dependent. Classes are on
                  Thursday, Friday and Saturday.{" "}
                </p>
              </div>
            </figure>
          </div>
          <div className="  bg-primary text-slate-100  relative max-w-sm transition-all duration-300">
            <div className="card-body">
              <h2 className="card-title">General Gym Classes</h2>
            </div>
            <figure>
              <img
                src="http://www.hartlepoolgym.co.uk/wp-content/uploads/2021/07/Pre-School-temp.jpeg"
                alt="Shoes"
              />
              <div className="card-body ">
                <p>
                  These gymnasts train twice a week and work towards regional
                  level competitions. General gymnastics compete in a diverse
                  range of competitions. They compete in floor and vault,
                  4-piece competitions, tumbling, pink events and various other
                  competitions.
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="h-400 bg-slate-50 py-10 px-6 "></div> */}
  </section>
);
