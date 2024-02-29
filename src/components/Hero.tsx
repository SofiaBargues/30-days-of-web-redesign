import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}py-0 sm:py-0 w-screen `}
    >
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="grid grid-cols-3 flex-row gap-4 h-36">
            <div className="image-item">
              <img
                alt="Image 1"
                src="https://media.istockphoto.com/id/910661012/es/foto/retrato-de-sonriente-ni%C3%B1o-de-lentes-hacia-arriba-amarillo-aislado-en.jpg?s=612x612&w=0&k=20&c=vDWeXHocEjl5tB-WPb1p5F1R1bjwpkkmIBPg_T1XfGI="
              />
            </div>
            <div className="image-item">
              <img
                alt="Image 2"
                src="https://media.istockphoto.com/id/1347495819/es/foto/hombre-con-gafas-de-sol-en-amarillo.jpg?s=612x612&w=0&k=20&c=8KIG5jbugjJnDGU1CrOHuZNLb1u5ykXpDrGDPEDBwWY="
              />
            </div>
            <div className="image-item">
              <img
                alt="Image 3"
                src="https://media.istockphoto.com/id/1300314623/es/foto/mujer-%C3%A9tnica-inteligente-ajustando-gafas.jpg?s=612x612&w=0&k=20&c=Q0RpLJCoTECjTfBApvuPynFa8DXs7nHkzeCwR2wp72Q="
              />
            </div>
          </div>
          <div className="hero bg-base-200">
            <div className="hero-content  text-center py-24">
              <div className="max-w-md ">
                <h1 className="text-6xl font-bold py-5">A.K. Bennett</h1>
                <p className="py-6 text-xl py-3 ">
                  Welcome, where crystal-clear vision meets unparalleled style.
                  We're not just about correcting vision; we're about enhancing
                  your unique perspective on the world. With a commitment to
                  quality, innovation, and personalized care, we're your go-to
                  destination for all things optical.
                </p>
                <button className=" btn btn-lg btn-accent">Appointments</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
