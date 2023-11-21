import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Projects from "./components/Projects/Projects";

import PropductDesigner from "./components/ProductDesigner/PropductDesigner";
import Service from "./components/Service/Service";

function App() {
  return (
    <>
      <Navbar />
      <PropductDesigner />
      <Service />
      <Projects />
    </>
  );
}

export default App;
