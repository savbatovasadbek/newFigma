import "./App.css";
import Blogs from "./components/Blogs/Blogs";
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
      <Blogs />
      <Projects />
    </>
  );
}

export default App;
