// import { logo } from "../assets";

export const Squares = () => (
  <section>
    <div className=" h-96  flex justify-center flex-col-3 gap-10">
      {/* <div className="text-5xl text-balance text-center font-semibold rounded-box place-items-center "></div> */}
      <div className="card m-10  bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://shop.barnsdalegardens.co.uk/cdn/shop/collections/mothers-day-afternoon-tea.jpg?v=1699366293&width=750"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Afternoon Tea</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book</button>
          </div>
        </div>
      </div>
      <div className="card m-10  bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://chefin.com/wp-content/uploads/2019/06/high-tea-social-meeting.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Event hire</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book</button>
          </div>
        </div>
      </div>
      <div className="card m-10  bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujGTgWlYJCjURS18vdG6p9Uacv4EJqZGbyvSyzlqNVzOoyahz"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Every day Visit</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
