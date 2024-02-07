
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {


  return (
    <div className="overflow-hidden bg-beige-white">
      <Navigation />
      <main>
        <Hero />
        <Middle />
        <Info />
      </main>
      <div className="lg:h-[25vh] bg-beige-white">

      </div>
      <Footer />
    </div>
  )
}

export default App
