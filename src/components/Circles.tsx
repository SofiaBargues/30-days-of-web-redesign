// import { logo } from "../assets";

export const Circles = () => (
  <section>
    <div className="bg-slate-50">
      <div className="">
        <div className="grid grid-cols-2 gap-10 p-20">
          <div className="card bg-white text-neutral text-center shadow-2xl">
            <div className="card card-body">
              <h2 className="text-2xl font-bold card-title ">Adult classes</h2>
            </div>
            <figure className="h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554060037-7778832b8904?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className="card  bg-white text-neutral shadow-2xl">
            <div className=" card card-body ot">
              <h2 className="text-2xl font-bold card-title ">
                {" "}
                Child classes{" "}
              </h2>
            </div>
            {/* <div className="w-full h--[400"></div> */}
            <figure className="h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1572540688236-4eb938e8c099?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlbm5pcyUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="h-400 bg-slate-50 py-10 px-6 "></div> */}
  </section>
);
