// import { logo } from "../assets";

export const TabUno = () => (
  <>
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      className="tab"
      aria-label="Tab 1"
    />
    <div
      role="tabpanel"
      className="tab-content bg-base-100 border-base-300 rounded-box p-6"
    >
      Tab content 1
    </div>
  </>
);
