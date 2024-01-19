import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";


function App() {

  return (
    <>
      <Navigation />
      <div className="h-screen">
        <Hero />
        <div className="h-screen bg-ppink flex justify-center items-center">
          hello steven
        </div>
      </div>
    </>
  )
}

export default App
