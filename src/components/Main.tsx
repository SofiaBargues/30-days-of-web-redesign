import { discount, molino } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/353756262_643203397844516_4422175833033224895_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=TLyNgfvOOtEAX_dmmKu&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCDQnQqTj0lwuZxhlzgKH6J14QgFSpirTV9L2O7y6U4Uw&oe=65E958F6"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-center">
            <h1 className="text-5xl  font-bold">Nowadays</h1>
            <p className="py-6 max-w-lg">
              The vast majority of the restoration work and the ongoing
              maintenance of Jill Windmill has been carried out by unpaid
              Society Volunteers, who have met at the Mill on virtually every
              Saturday since January 1979.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
