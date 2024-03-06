import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Bottom from "./components/Bottom";
import Main1 from "./components/Main1";
import "flowbite";

function App() {
  return (
    <div className="min-h-screen flex flex-col h-full ">
      <Navbar />
      <main className="flex-1 h-screen flex flex-col "></main>
      <Hero />
      <Main />
      <Bottom />
      <Main1 />
      <Footer />
    </div>
  );
}

export default App;
