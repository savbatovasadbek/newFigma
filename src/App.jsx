import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

import Projects from "./components/Projects/Projects";

import PropductDesigner from "./components/ProductDesigner/PropductDesigner";
import Service from "./components/Service/Service";

import Testimonials from "./components/Testimonials/Testimonials";

import Education from "./components/Education/Education";


function App() {
  return (
    <>
      <Navbar />
       <Hero/>
      <Header />
      <PropductDesigner />
      <Service />

      <Testimonials/>
      <Blogs />

      <Projects />
      <Education />
    </>
  );
}

export default App;
