import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Projects from "./components/Projects/Projects";

import PropductDesigner from "./components/ProductDesigner/PropductDesigner";
import Service from "./components/Service/Service";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <PropductDesigner />
      <Service />
      <Testimonials/>
      <Projects />
    </>
  );
}

export default App;
