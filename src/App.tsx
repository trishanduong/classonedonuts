
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Middle from "./components/Middle";

function App() {


  return (
    <>
      <Navigation />
      <div className="h-screen">
        <Hero />
        <Middle />
        {/* <div className="h-auto bg-dbrown flex justify-center items-center">
          <p className="font-grotesk text-5xl lg:text-7xl font-medium text-pbrown p-6">From our family to yours, blending tradition with innovation.♥</p>
        </div> */}
      </div>
    </>
  )
}

export default App
