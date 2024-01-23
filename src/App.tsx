
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <Middle />
        <Info />
      </main>
      <Footer />
    </div>
  )
}

export default App
