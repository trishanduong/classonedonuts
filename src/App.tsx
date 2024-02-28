
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Info from "./components/Info";
import Footer from "./components/Footer";
import VideoBlock from "./components/Video";
import Article from "./components/Article";
import Filler from "./components/Filler";

function App() {

  return (
    <div className="overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <Article />
        <Filler />
        <Middle />
        <VideoBlock />
        <Info />
      </main>
      <Footer />
    </div>
  )
}

export default App
