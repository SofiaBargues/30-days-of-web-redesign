import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section id="home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://static.wixstatic.com/media/f8d286_69abc803118e4c7b987327b4dadc9f83~mv2.jpg/v1/fill/w_937,h_622,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f8d286_69abc803118e4c7b987327b4dadc9f83~mv2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Brighton Fishing Museum</h1>
            <p className="mb-5">
              Come take a journey with us into the rich history of Brighton’s
              Fishing Community. Discover a Brighton of the past: a bustling
              little fishing village on the south coast which was transformed
              into a fashionable seaside resort.
            </p>
            <button className="btn btn-primary">Visit Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
