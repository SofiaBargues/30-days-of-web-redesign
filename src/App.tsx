import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col h-full">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        {/* Others */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
