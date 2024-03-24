// import { logo } from "../assets";

export const WeekendScools = () => (
  <>
    <input
      type="radio"
      name="my_tabs_2"
      role="tab"
      className="tab tabs-lg text-xs"
      aria-label="Weekend Scools"
    />

    <div
      role="tabpanel"
      className="tab-content bg-base-100 border-base-300 rounded-box p-20"
    >
      <div className="grid grid-cols-3 text-center gap-7">
        <div className="flex flex-col">
          <h1 className="text-xl text-center text-primary m-5">Term Times</h1>
          <p className="text-sm text-start text-balance">
            Spring Term: Saturday 13th January to 23rd March 2024 Summer Term:
            Saturday 27th April to 6th July 2024 Autumn Term: Saturday 28th
            September to 7th December 2024
          </p>{" "}
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-center text-primary m-5">Class Times</h1>
          <p className="text-sm text-start text-balance">
            Saturday Mornings 3 - 4 year olds: 9.30am – 11.00am 11.30am – 1.00pm
            5 - 6 year olds: 9.30am – 11.00am 11.30am – 1.00pm 7 - 18 year olds:
            10.00am – 1.00pm
          </p>{" "}
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl text-center text-primary m-5">Directions</h1>
          <p className="text-sm text-start text-balance">
            Click Here We have large car park and use the main entrance on
            Lilleshaw Road. Bus stops near by are serviced by: 157, 164, 280, 80
            and S1
          </p>{" "}
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl text-center text-primary m-5">Fees</h1>
        <p className="text-sm text-start text-balance">
          Fees (3-6 years) £165 per term (£41.25 a month on direct debit spread
          over the year) £123.75 for second child, £85.50 for third child New
          students are invited to do an initial two-week trial for £30. This is
          deducted from the fees when you book for the rest of the term. Fees
          (7-18 years) £297 per term (£74.25 a month on direct debit spread over
          the year) £222.75 for second child, £148.50 for third child New
          students are invited to do an initial two-week trial for £60. This is
          deducted from the fees when you book for the rest of the term.
        </p>{" "}
        <btn className="btn btn-primary text-white m-10">Book Now</btn>
      </div>
    </div>
  </>
);
