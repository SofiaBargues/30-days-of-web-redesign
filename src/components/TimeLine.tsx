// import { logo } from "../assets";

export const TimeLine = () => (
  <div className="overflow-x-auto m-10">
    <h1 className="text-2xl font-serif font-semibold text-center m-10">
      History
    </h1>
    <ul className="steps p-10">
      <li
        data-content="1450"
        className="step step-neutral text-xs text-balance"
      >
        A pair of 15th century bell were cast. Neither bell bore an inscription.
      </li>
      <li data-content="1552" className="step step-neutral text-xs">
        Record of 3 bells in the tower ("Item iij gret bells and ij smalle hand
        bells). [1]
      </li>
      <li
        data-content="1634"
        className="step step-neutral text-xs text-balance"
      >
        A bell was recast by Joseph Hatch.
      </li>
      <li
        data-content="1758"
        className="step step-neutral text-xs text-balance"
      >
        Record of 3 bells in the tower. [2]
      </li>
      <li
        data-content="1798"
        className="step step-neutral text-xs text-balance"
      >
        Record of 3 bells in the tower. [3]
      </li>
      <li
        data-content="1895"
        className="step step-neutral text-xs text-balance"
      >
        Bells rehung with new fittings in a new frame by Samuel B. Goslin.
      </li>
      <li
        data-content="1974"
        className="step step-neutral text-xs text-balance"
      >
        A recommendation was made for the 2 bells to be hung dead as they were
        unsafe to ring full circle. This never happened.
      </li>
    </ul>
    <div className="flex flex-row m-20 gap-2">
      <p className="text-xs text-end text-balance">
        [1] Item iij gret bells and ij smalle hand bells. (Edwardian Inventory,
        1552) [2] "This Church consists of the Great, and North Chancells, The
        Body, and a North Isle; In The Steeple hang 3 Bells, 2 of which have no
        Inscription; the third: Joseph Hatch Me fecit. 1634." (Rev’d Bryan
        Faussett, 1758) [3] The church, which is dedicated to St. Mary, is a
        small building, consisting of two isles and two chancels, having a low
        spire steeple at the west end, in which are three bells. ('The History
        and Topographical Survey of the County of Kent. Vol 7', Edward Hasted)
      </p>{" "}
      <div className="bg-neutral h-20 w-[6px]"></div>
    </div>
  </div>
);
