import React, { useState } from "react";
// import components below
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const [pageRendered, setPageRendered] = useState("About");

  function renderMain() {
    if (pageRendered === "About") {
      return <About />;
    } else if (pageRendered === "Projects") {
      return <Projects />;
    } else if (pageRendered === "Contact") {
      return <Contact />;
    }
  }

  return (
    <div>
      {/* <button onClick={() => {
        setPageRendered("About")
      }}>Click</button> */}
      <Nav setter={setPageRendered}/>
      <main>{renderMain()}</main>
    </div>
  );
}

export default App;
