import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PropductDesigner from "./components/ProductDesigner/PropductDesigner";
import Service from "./components/Service/Service";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PropductDesigner />
      <Service />
    </>
  );
}

export default App;
