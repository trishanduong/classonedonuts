
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {


  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Middle />
        <Info />
      </main>
      <Footer />
    </>
  )
}

export default App
