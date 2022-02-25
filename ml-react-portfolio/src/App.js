import React, { useState } from "react";
import About from './components/About';
// import components below 
import Nav from './components/Nav';
import Projects from './components/Projects'
import Contact from "./components/Contact/Contact";

function App() {


  return (
    <div>
      <Nav />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
