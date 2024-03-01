import { Navbar, Hero, Footer } from "./components";
import styles from "./style";

function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      <div>
        <div>
          <div>
            <Hero />
          </div>
        </div>

        <div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
