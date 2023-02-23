import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/Home";
import { Route, Routes } from 'react-router-dom';
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
