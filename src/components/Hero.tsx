import { discount, molino } from "../assets";

const Hero = () => {
  return (
    <div
      className="hero  min-h-screen bg-base-200"
      style={{
        backgroundImage:
          "url(https://lh3.googleusercontent.com/p/AF1QipPf2pvtbCDCzYCLLtpUi8kQy1B0MCwl2DP4dylU=s680-w680-h510)",
      }}
    >
      <div className=""></div>
      <div className="hero-overlay bg-opacity-80 hero-content flex lg:flex-row">
        <img
          src="https://www.ravenside.net/2015/resources/ravenside-bexhill.jpg"
          className="max-w-96 mx-12 rounded-lg shadow-2xl"
        />
        <div className=" mx-14 ">
          <h1 className="text-5xl font-bold text-base-200">
            Retail & Leisure Park
          </h1>
          <p className="py-6 text-base-200">
            The retail and leisure park features 13 big name stores including a
            24hr Tesco store and a large B&Q Warehouse which are a major draw
            for shoppers who then have the choice of visiting Boots, Currys and
            PC World amongst other big names at the shopping centre.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
