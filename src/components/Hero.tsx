// import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div
        className="hero"
        style={{
          backgroundImage:
            "url(https://cdn.zenfolio.com/cdn2/pub/ntjenhvoufbc/0/null/m/kkzpjnokn_rpdop7uqsy/s/v-10/p1711332550-5.jpg?ts=ASH&tk=mrD3e3gkA5jeLopFEOHHImmMt5PHWXQ7XsqZqDmmxJo=&v=2&visitor=FwDtmueJtjbSRDYVTrhQQqxFwn5cAJS5ykBMewaBToLy&auth=exp=1709596799~acl=%2Fcdn2%2Fpub%2Fntjenhvoufbc%2F%2A~hmac=fa4e1f25b645245e93d6cffccba6d73a)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="hero-content py-80 text-right text-neutral-content  felx flex-col justify-around relative ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">The Chattri</h1>
            <p className="mb-28">
              Is a memorial built to honour the Indian dead of the First World
              War. It stands on the Downs near Patcham at the place where Hindu
              and Sikh soldiers who died in Brighton war hospitals during
              1914-1915 were cremated.
            </p>
          </div>
          <div className="absolute bottom-5 text-right  left-0 right-0">
            <p className="">Help the Chattri Memorial Group</p>
            <button className="btn btn-xs btn-primary">Suport Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
