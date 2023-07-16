import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Card from "./pages/Card.jsx"
import Shop from "./pages/Shop.jsx"
import Contact from "./pages/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/card" element={<Card />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
