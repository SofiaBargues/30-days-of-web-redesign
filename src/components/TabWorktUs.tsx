// import { logo } from "../assets";

export const TabWorktUs = () => (
  <>
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      className="tab"
      aria-label="Tab 3"
    />
    <div
      role="tabpanel"
      className="tab-content bg-base-100 border-base-300 rounded-box p-6"
    >
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  </>
);
