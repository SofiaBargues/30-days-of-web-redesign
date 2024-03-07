import { discount, robot } from "../assets";

export const Hero = () => {
  return (
    <section id="home">
      <div
        className="hero h-full"
        // style={{
        //   backgroundImage:
        //     "url(https://thedoghousepub.co.uk/wp-content/gallery/dog-house-pub-main-gallery/MG_5915.jpg)",
        // }}
      >
        <div className=" grid grid-cols-2 my-4 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className=" h-auto max-w-full rounded-lg"
                src="https://thedoghousepub.co.uk/wp-content/gallery/dog-house-pub-main-gallery/MG_5881.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://thedoghousepub.co.uk/wp-content/gallery/dog-house-pub-main-gallery/MG_5923.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://thedoghousepub.co.uk/wp-content/gallery/dog-house-pub-main-gallery/MG_5915.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://thedoghousepub.co.uk/wp-content/gallery/dog-house-pub-main-gallery/MG_5886.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://thedoghousepub.co.uk/wp-content/gallery/dog-house-pub-main-gallery/MG_5919.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://thedoghousepub.co.uk/wp-content/gallery/dog-house-pub-main-gallery/MG_5910.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://thedoghousepub.co.uk/wp-content/gallery/dog-house-pub-main-gallery/MG_5907.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hero-overlay bg-opacity-600"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">
              The Dog <br />
              House Pub{" "}
            </h1>
            <p className="mb-5  text-white ">
              Come take a journey with us into the rich history of Brighton’s
              Fishing Community. Discover a Brighton of the past: a bustling
              little fishing village on the south coast which was transformed
              into a fashionable seaside resort.
            </p>
            <button className="text-neutral  btn btn-secondary">
              Visit Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
