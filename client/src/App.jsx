import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header"
import "./App.css";
import { CartContextProvider } from "./context/Cart";

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <CartContextProvider>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Card />} />
    </Routes>
    </BrowserRouter>
    </QueryClientProvider>
    </CartContextProvider>
    </>
  );
}

export default App;
