import { React } from "react";
// React Router imports below---in V6, Switch is replaced by Routes
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// import components below
import About from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
// import Contact from "./components/Contact/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact2 from "./components/Contact/Contact2"

//declaring name of initial states and setter functions
function App() {

  // const [backgroundColor, setBackgroundColor] = useState("#C2D897");
  // const [navColor, setNavColor] = useState("#C2D897");
  // const [footerColor, setFooterColor] = useState("#C2D897");
  
  return (

    <Router>
      <div
        className="App"
      style={{
        // backgroundColor: backgroundColor,
        // navColor: navColor,
        // footerColor: footerColor,
        height: "100vh"
      }}
      >
        <Nav
        // setBackgroundColor={setBackgroundColor}
        // setNavColor={setNavColor}
        // setFooterColor={setFooterColor}
        />
        {/* Routes = Switch in react router v6 */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ml_portfolio" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// RETURNS---------------------------------------



export default App;
