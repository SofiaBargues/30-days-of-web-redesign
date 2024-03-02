import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen flex flex-col h-full">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />|
        <Main />|{/* Others */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
