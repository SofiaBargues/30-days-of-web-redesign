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
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn  btn-primary"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Open Time
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box text-center">
              <h3 className="font-bold text-lg"> Hours: </h3>
              <p className="py-4">
                Monday 6 am–12 am <br />
                Tuesday 6 am–12 am
                <br /> Wednesday 6 am–12 am
                <br /> Thursday 6 am–12 am <br />
                Friday 6 am–12 am
                <br /> Saturday 6 am–12 am
                <br /> Sunday 10 am–4 pm
              </p>
              {/* <img
                src="https://www.ravenside.net/resources/ravenside-map-2024.jpg"
                className="min-w-xl rounded-lg shadow-2xl"
              /> */}
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Hero;
