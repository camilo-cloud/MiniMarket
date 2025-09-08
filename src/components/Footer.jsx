// Footer.jsx
import { NavLink } from "react-router-dom";
import logo from "../assets/images/shopping_cart.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Logo + copy */}
        <div className="footer__logo">
          <NavLink to="/">
            <div className="footer__logo-wrapper">
              <img className="footer__logo-icon" src={logo} alt="logo" />
              <h2 className="footer__logo-text">MiniMarket</h2>
            </div>
          </NavLink>
          <p className="footer__copy">© 2025 MiniMarket. Created by Camilo Cuartas</p>
        </div>

        {/* Links */}
        <div className="footer__links">
          <h3>Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__contact">
          <h3>Contact Us</h3>
          <p>📍 123 Fake St, Nabesville</p>
          <p>📞 (123) 456-7890</p>
          <p>✉️ hello@minimarket.com</p>
        </div>

        {/* Social media */}
        <div className="footer__icons">
          <h3>Follow Us</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
