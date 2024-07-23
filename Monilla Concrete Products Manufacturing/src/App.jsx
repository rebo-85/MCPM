import NavigationBar from "./navigation_bar";
import Home from "./home";
import About from "./about";
import Services from "./services";
import Contact from "./contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <header>
        <Router>
          <div>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </header>
    </>
  );
};

export default App;
