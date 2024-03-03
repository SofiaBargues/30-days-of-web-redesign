import { discount, molino } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="">
      <div className="flex flex-row   hero max-h-screen gap-6 justify-center align-center">
        <div className="card w-56 my-28  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://lh3.googleusercontent.com/a-/ALV-UjVcnMv1Iru6Bd9S929ej21LJwq5j1wPC68zxPRvVRqQ1Fw=w48-h48-p-rp-mo-br100"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sarah Hall</h2>
            <p>
              We use this company for 1to1 transfers to and from the airport.
              They are prompt, polite, can't rate them highly enough. We have
              also used them in the past for private tours and they have been
              excellent.
            </p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card w-56 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://lh3.googleusercontent.com/a-/ALV-UjWK9aUuKkWX19iYhCXNSu-v7kQHD0m5rL--GqGZYxln4ZQ=w48-h48-p-rp-mo-ba5-br100"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Lemmy Morgan</h2>
            <p>
              This is an all-in-one park and marketplace. We have gatherings of
              the very best supermarkets, restaurants, auto parts shops, and the
              likes on this property. To mention but a few, the following
              businesses are located on this site: …More
            </p>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card w-56 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://lh3.googleusercontent.com/a-/ALV-UjVPxRIRjO1qNwOyjoP5dQE_nA_zKfEzV4TK5UDx1VgQQhU=w48-h48-p-rp-mo-ba5-br100"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Keen Traveller</h2>
            <p>
              Excellent place to do your shopping although you will find no
              leisure activity here except if you consider shopping as a leisure
              activity.
            </p>
            <div className="card-actions">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
