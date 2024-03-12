import { discount, robot } from "../assets";
import { Navbar } from "./Navbar";
import { Squares } from "./Scuares";
import { Stacks } from "./Stacks";

export const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
        <iframe
          className=" mx-auto w-full h-full  rounded-none lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
          src="https://iframe.videodelivery.net/d70aee0e18e890e67bed8689a5233d51?muted=true&preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fvideodelivery.net%2Fd70aee0e18e890e67bed8689a5233d51%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div
      // className=""
      // style={{
      //   backgroundImage:
      //     "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className=" absolut">
        <Stacks />;
      </div>
    </div>
  );
};
