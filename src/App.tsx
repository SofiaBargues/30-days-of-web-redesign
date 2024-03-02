import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Main1 from "./components/Main1";

function App() {
  return (
    <div className="min-h-screen flex flex-col h-full">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
      </main>
      <div className="flex-1  flex flex-row">
        <Main />
        <Main1 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
