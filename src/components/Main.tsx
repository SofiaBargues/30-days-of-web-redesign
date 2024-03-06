import { discount, molino } from "../assets";

const Main = () => {
  return (
    <section id="home">
      <div className="flex flex-col h-full gap-6 py-28 justify-around items-center w-full bg-secondary-800">
        <div className="text-center">
          <h1 className="text-5xl  font-bold">About us</h1>
          <p className="py-6 max-w-lg">
            We are experienced DJs running a mobile disco based in the Herts
            Beds & Bucks area. Providing music and lights for all your
            celebrations and corporate events at reasonable prices. When you
            book with MG Sounds you get a combined total of over 40 years of
            experience running your music. We can play everything from Glenn
            Miller to up to date, we’ll chat with you before your event to work
            out your ideal play list.
          </p>
        </div>
        {/* <img
          src="https://www.ravenside.net/resources/ravenside-map-2024.jpg"
          className="min-w-xl rounded-lg shadow-2xl"
        /> */}
      </div>
    </section>
  );
};

export default Main;
