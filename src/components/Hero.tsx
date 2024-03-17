import { restElement } from "@babel/types";
import { casa } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Circles } from "./Circles";
import { Proof } from "./Proof";

export const Hero = () => {
  return (
    <div className="hero my-44 bg-white container m-auto">
      <div className="hero-content gap-0 m-0 max-w-full items-start flex-col sm:flex-row-reverse">
        <div className="w-5/12">
          <img className="h-auto max-w-full rounded-lg" src={casa} alt="" />
        </div>
        <div className="w-7/12">
          <h1 className="text-5xl font-bold">
            Close deals in less time and increase you income
          </h1>
          <p className="py-6 text-gray-500">
            Boost your career with our AI-powered marketing tools
            <br /> for real estate agents and brokers.
          </p>
          <button className="btn text-white rounded-sm btn-primary">
            Start earning more now{" "}
          </button>
          <p className="py-2 text-xs  text-gray-400">
            No credit card required - 15 generations for free{" "}
          </p>
          <p className=" text-sm mt-10 text-gray-400">Used by people on</p>
          <div className=" flex flex-row-reverse  items-center  ">
            <div className="hero-overlay bg-opacity-60 "></div>
            <img
              alt="coldwell banker"
              loading="lazy"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="filter grayscale p-2 opacity-60"
              srcSet="https://www.estatetext.com/_next/image?url=%2Fimages%2Fcentury21-logo.png&w=128&q=75"
              src="https://www.estatetext.com/_next/image?url=%2Fimages%2Fcentury21-logo.png&w=128&q=75"
              style={{ color: "transparent" }}
            />{" "}
            <img
              alt="century 21"
              loading="lazy"
              width="auto"
              height="auto"
              decoding="async"
              data-nimg={1}
              className="filter grayscale p-2 opacity-60"
              srcSet="https://www.estatetext.com/_next/image?url=%2Fimages%2Fcoldwellbanker-logo.png&w=128&q=75"
              src="https://www.estatetext.com/_next/image?url=%2Fimages%2Fcoldwellbanker-logo.png&w=128&q=75"
              style={{ color: "transparent" }}
            />{" "}
            <img
              alt="keller williams"
              loading="lazy"
              decoding="async"
              width="auto"
              height="auto"
              data-nimg={1}
              className="filter grayscale p-2 opacity-60"
              srcSet="https://www.estatetext.com/_next/image?url=%2Fimages%2Fkeller-williams-logo.png&w=128&q=75"
              src="https://www.estatetext.com/_next/image?url=%2Fimages%2Fkeller-williams-logo.png&w=128&q=75"
              style={{ color: "transparent" }}
            />{" "}
            <img
              alt="remax"
              loading="lazy"
              decoding="async"
              width="auto"
              height="auto"
              data-nimg={1}
              className="filter p-2 grayscale opacity-60"
              srcSet="https://www.estatetext.com/_next/image?url=%2Fimages%2Fremax-logo.png&w=128&q=75"
              src="https://www.estatetext.com/_next/image?url=%2Fimages%2Fremax-logo.png&w=128&q=75"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
