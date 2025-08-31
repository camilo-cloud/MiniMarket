import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import { useState } from "react";

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity + 1
      };
      console.log(newCart)
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }



  return (
    <Router>
      <Header cart={cart}/>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart}/>} />
        <Route path="/products" element={<Products addToCart={addToCart}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
