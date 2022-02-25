import React from 'react';
import About from './components/About';
// import components below 
import Nav from './components/Nav';
import Projects from './components/Projects/index'

function App() {

  return (
    <div>
      <Nav />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
