import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Squares } from "./components/Scuares";
import { Visit } from "./components/Proof";
import { Video } from "./components/Video";

function App() {
  return (
    <div className="min-h-screen flex flex-col h-full">
      <Navbar />
      <main className="flex flex-col flex-1">
        <Video />
        <Hero />
        {/* <Squares /> */}
        {/* <Visit /> */}

        {/* Others */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
