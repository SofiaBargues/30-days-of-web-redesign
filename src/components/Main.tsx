import { discount, molino } from "../assets";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col gap-6 my-10 justify-around items-center w-full">
        <img
          src="https://www.ravenside.net/resources/ravenside-map-2024.jpg"
          className="min-w-xl rounded-lg shadow-2xl"
        />
        <div className="text-center">
          <h1 className="text-5xl  font-bold">Nowadays</h1>
          <p className="py-6 max-w-lg">
            The vast majority of the restoration work and the ongoing
            maintenance of Jill Windmill has been carried out by unpaid Society
            Volunteers, who have met at the Mill on virtually every Saturday
            since January 1979.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
