import "./App.css";
import AccordionPage from "./components/Accordion/AccordionPage";
import Accordion from "./components/Accordion/AccordionPage";
import Navbar from "./components/Navbar/Navbar";
import PropductDesigner from "./components/ProductDesigner/PropductDesigner";
import Service from "./components/Service/Service";

function App() {
  return (
    <>
      <Navbar />
      <PropductDesigner />
      <Service />
      <AccordionPage />
    </>
  );
}

export default App;
