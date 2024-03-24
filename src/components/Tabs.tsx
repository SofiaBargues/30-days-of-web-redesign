// import { logo } from "../assets";

import { TabTres } from "./TabTres";
import { TabDos } from "./TabDos";
import { TabUno } from "./TabUno";

export const Tabs = () => (
  <div className=" p-20">
    <h1 className="text-4xl text-right font-bold mx-10">Where find us?</h1>
    <div className="">
      <div role="tablist" className="tabs tabs-lifted">
        <TabUno />
        <TabDos />
        <TabTres />
      </div>
    </div>
  </div>
);
