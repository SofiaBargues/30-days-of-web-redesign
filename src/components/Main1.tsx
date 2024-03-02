import { discount, molino } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="h-full">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://jillwindmill.org.uk/images/cm1.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-center">
            <h1 className="text-5xl font-bold my-6">Early History</h1>
            <p className="py-6 max-w-lg">
              The earliest reference to a windmill on the present site is from
              September 1765 when an indenture was made between Viscount
              Montague and Edward Oram of Clayton. It read: - 'Lease all that
              part of ground near to Duncton Gate on which a windmill has been
              lately erected by the son of the said Viscount and contained in
              the whole by five rods every way for a term of 99 years.'
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
