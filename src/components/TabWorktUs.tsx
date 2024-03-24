// import { logo } from "../assets";

export const TabWorktUs = () => (
  <>
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      className="tab tabs-lg text-xs w-24"
      aria-label="Work"
    />
    <div
      role="tabpanel"
      className="tab-content bg-base-100 border-base-300 rounded-box p-6"
    >
      <div className="card card-side bg-base-100 ">
        <figure>
          <img
            className="h-60"
            src="https://www.jigsaw-arts.co.uk/wp-content/uploads/2019/05/Jigsaw-Arts-April-3.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dance, Drama and Singing Teachers</h2>
          <p className="text-sm w-60 m-7">
            We are looking for energetic and enthusiastic teachers for our
            weekend schools. Please email a CV and covering letter to
            michael@jigsaw-arts.co.uk.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  </>
);
