import "./App.css";
import AccordionPage from "./components/Accordion/AccordionPage";
import Accordion from "./components/Accordion/AccordionPage";
import Navbar from "./components/Navbar/Navbar";
import Service from "./components/Service/Service";

function App() {
  return (
    <>
      <Navbar />
      <Service />
      <AccordionPage />
    </>
  );
}

export default App;
