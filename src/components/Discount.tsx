// import { logo } from "../assets";

export const Discount = () => (
  <div className="flex flex-row-2 bg-green-500 rounded-2xl h-20 mx-20 my-0 ">
    <div className=" item-center p-2 w-[600px]">
      <div className=" bg-neutral h-full  text-neutral">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 15 }}></span>
        </span>
        days
      </div>
    </div>
    <div className="flex gap-5 item-center">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 15 }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 10 }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 24 }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 9 }}></span>
        </span>
        sec
      </div>
    </div>
  </div>
);
