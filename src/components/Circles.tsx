// import { logo } from "../assets";

export const Circles = () => (
  <section>
    <div className="bg-secondary">
      <div className="">
        <div className="grid grid-cols-1 gap-10 p-20">
          <div className="card bg-white text-neutral text-center shadow-2xl">
            <div className="card card-body">
              <h2 className="text-2xl font-bold card-title ">
                SUPERB FELINE ACCOMMADATION
              </h2>
            </div>
            <figure className="h-[600px] overflow-hidden">
              <img
                src="https://www.tigi-tabu-cattery.co.uk/s/cc_images/cache_2496786960.JPG"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p>
                igi-tabu's is a family run cattery set in a quiet village
                located near Luton Airport and just 15 minutes from the M1.Close
                to Leighton Buzzard we offer superb feline accommadation in a
                safe and loving enviroment,we pride ourselves in giving your cat
                the love and attention they require while away from home.
              </p>
            </div>
          </div>
          <div className="card  bg-white text-neutral shadow-2xl">
            <div className=" card card-body ot">
              <h2 className="text-2xl font-bold card-title "> FIVE STAR </h2>
            </div>
            {/* <div className="w-full h--[400"></div> */}
            <figure className="h-[600px] overflow-hidden">
              <img
                src="https://www.tigi-tabu-cattery.co.uk/s/cc_images/cache_2496786964.jpeg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <p>
                Rating from the central bedfordshire council animal welfare unit
                .<li> We have temperature controlled pens</li>
                <li>
                  {" "}
                  We can cater for cats on special diets or medication
                </li>{" "}
                <li>
                  {" "}
                  We supply toys but its good to bring something that your cat
                  is familiar with{" "}
                </li>{" "}
                But most of all we supply the love and affection your cat needs
                that will give you the peace of mind to relax and enjoy your
                holiday knowing there enjoying there's
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="h-400 bg-slate-50 py-10 px-6 "></div> */}
  </section>
);
