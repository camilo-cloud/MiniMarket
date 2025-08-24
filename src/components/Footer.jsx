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
          <p className="footer__copy">© 2025 MiniMarket. Creado por Camilo Cuartas</p>
        </div>



        {/* Links */}
        <div className="footer__links">
          <h3>Enlaces</h3>
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/products">Productos</NavLink></li>
            <li><NavLink to="/about">Nosotros</NavLink></li>
            <li><NavLink to="/contact">Contacto</NavLink></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer__contact">
          <h3>Contacto</h3>
          <p>📍 Calle Falsa 123, Ciudad</p>
          <p>📞 +57 300 000 0000</p>
          <p>✉️ contacto@minimarket.com</p>
        </div>

        {/* Redes sociales */}
        <div className="footer__icons">
          <h3>Síguenos</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
