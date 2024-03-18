// import { logo } from "../assets";

export const About = () => (
  <div className="overflow-x-auto p-20 ">
    <h1 className="text-4xl text-right font-bold mx-10">About Us</h1>

    <div className="flex flex-row-reverse m-20 gap-2">
      <p className="text-md text-start text-balance w-[1000px]">
        A modern, spacious and multi-functional venue for parties, classes,
        activity groups, business meetings, presentations, social and corporate
        events. This modern hall was opened in 2014, constructed of beautiful
        oak with a vaulted ceiling with the highest quality amenities and great
        facilities. The hall is well lit with natural light and high-quality
        fittings. Oving Village Hall is owned by Oving Parish Council, and
        managed by a Oving Village Hall Trust.
      </p>{" "}
      <div className="bg-neutral h-50 w-[6px]"></div>
    </div>
    <div className="flex flex-row m-20 gap-2">
      <p className="text-md text-end text-balance  w-[1000px]">
        ​For general enquiries please call on 01296 532393, ​or e-mail us at
        hall@ovingpc.com. For bookings please click here. Online booking is now
        available. ​ Information about hire charges can be found by clicking
        here. In the case of emergencies (including public nuisance) please call
        01296 532393.
      </p>{" "}
      <div className="bg-neutral h-50 w-[6px]"></div>
    </div>
  </div>
);
