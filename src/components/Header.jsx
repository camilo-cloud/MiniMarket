// Import necessary React hooks, components, and assets.
import { useState, useRef, useEffect } from "react";
import logo from "../assets/images/shopping_cart.png";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import Search from "./Search";

// Define the Header component, which serves as the main navigation bar for the application.
export default function Header({ totalItems }) {
    // State to manage the visibility of the mobile navigation menu.
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Ref to the mobile menu DOM element, used for detecting clicks outside of it.
    const mobileMenuRef = useRef(null);

    // Toggles the mobile menu's visibility.
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Effect to handle clicks outside the mobile menu to close it.
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the menu is open and the click is outside the menu, close it.
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        // Add event listener when the component mounts.
        document.addEventListener("mousedown", handleClickOutside);
        // Clean up the event listener when the component unmounts.
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Closes the mobile menu.
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header className="header__container">
            {/* Logo and site title, linking to the homepage. */}
            <NavLink to="/">
                <div className="header__logo">
                    <img className="header__logo-icon" src={logo} alt="logo" />
                    <h1 className="header__logo-text">MiniMarket</h1>
                </div>
            </NavLink>

            {/* Search bar for desktop view. */}
            <div className="header__search-bar">
              <Search />
            </div>

            {/* Main navigation for desktop view. */}
            <nav className="header__nav">
                <ul className="header__nav-list">
                    {/* Navigation items. NavLink is used to apply active styles. */}
                    <li>
                        <NavLink to="/" className={({ isActive }) => `nav__item${isActive ? " nav__item--active" : ""}`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({ isActive }) => `nav__item${isActive ? " nav__item--active" : ""}`}>
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => `nav__item${isActive ? " nav__item--active" : ""}`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => `nav__item${isActive ? " nav__item--active" : ""}`}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            {/* Cart icon with item count badge. */}
            <div className="header__icon-container">
                <Link to="/cart">
                    <Button variant="icon">
                        🛒 {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                    </Button>
                </Link>
            </div>

            {/* Hamburger button to toggle the mobile menu. */}
            <Button className="header__hamburger" onClick={toggleMobileMenu}>
                ☰
            </Button>

            {/* Mobile menu, rendered conditionally based on state. */}
            {mobileMenuOpen && (
                <div className="header__mobile-menu" ref={mobileMenuRef}>
                    {/* Search bar within the mobile menu. */}
                    <div className="mobile-search">
                        <Search onSearch={closeMobileMenu} />
                    </div>
                    {/* Navigation list for mobile view. */}
                    <ul className="mobile-nav-list">
                        {/* Each NavLink closes the menu on click. */}
                        <li>
                            <NavLink to="/" className={({ isActive }) => `nav__item${isActive ? " nav__item--active" : ""}`} onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className={({ isActive }) => `nav__item${isActive ? " nav__item--active" : ""}`} onClick={closeMobileMenu}>
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => `nav__item${isActive ? " nav__item--active" : ""}`} onClick={closeMobileMenu}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => `nav__item${isActive ? " nav__item--active" : ""}`} onClick={closeMobileMenu}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
