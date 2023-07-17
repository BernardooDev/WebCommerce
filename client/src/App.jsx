import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header"
import "./App.css";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/card" element={<Card />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
