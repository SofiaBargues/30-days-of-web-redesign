// import { logo } from "../assets";

import { TabContactUs } from "./TabContactUs";
import { News } from "./News";
import { WeekendScools } from "./WeekendScools";
import { TabWorktUs } from "./TabWorktUs";

export const Tabs = () => (
  <div className=" p-20">
    <h1 className="text-4xl text-right font-bold mx-10"></h1>
    <div className="">
      <div role="tablist" className="tabs tabs-lg  tabs-lifted">
        <WeekendScools />
        <News />
        <TabContactUs />
        <TabWorktUs />
      </div>
    </div>
  </div>
);
