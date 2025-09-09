import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage"; // Import the new page
import { useState, useEffect } from "react";

function App() {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('minimarketCart');
    if (savedCart) {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        localStorage.removeItem('minimarketCart'); // Clean corrupted data
        return [];
      }
    }
    return [];
  });

    // SAVE CART WHENEVER IT CHANGES
    useEffect(() => {
      localStorage.setItem('minimarketCart', JSON.stringify(cart));
    }, [cart]);

  function addToCart(product) {
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity + 1
      };
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
 
  //eliminate an item from the cart
  function removeFromCart(productId){
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
  }

  //update the quantity of an item in the cart
  function updateQuantity(productId, newQuantity){
    if(newQuantity <= 0){
      removeFromCart(productId);
    }else{
      const newCart = cart.map(item => {
        if(item.id === productId){
          return {...item, quantity: newQuantity};
        }
        return item;
      });
      setCart(newCart);
    }
  }

  //clear the cart
  function clearCart(){
    setCart([]);
  }

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <Header  totalItems={totalItems}/>
      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart}/>} />
          <Route path="/products" element={<Products addToCart={addToCart}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={
            <CartPage 
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
              cartTotal={cartTotal}
              totalItems={totalItems}
            />
          } />
          <Route path="*" element={<NotFoundPage />} /> {/* This is the 404 route */}
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
