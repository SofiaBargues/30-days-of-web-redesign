import {
  Navbar,
  Hero,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  CTA,
  Footer,
} from "./components";
import Hours from "./components/Hours";
import styles from "./style";

function App() {
  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden sticky top-0 z-[9] `}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className="bg-primary w-full overflow-hidden ">
        <div className={`bg-slate-800`}>
          <Hero />
        </div>

        <div className={`bg-black  ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} py-20`}>
            <CardDeal />
            {/* <Hours /> */}
            <Testimonials />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
