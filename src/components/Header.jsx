import { useState, useRef, useEffect } from "react";
import logo from "../assets/images/shopping_cart.png";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header({ totalItems}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const closeMobileMenu = () => setMobileMenuOpen(false);


    return (
        <header className="header__container">
            <NavLink to="/">
                <div className="header__logo">
                    <img className="header__logo-icon" src={logo} alt="logo" />
                    <h1 className="header__logo-text">MiniMarket</h1>
                </div>
            </NavLink>

            <div className="header__search-bar">
              <Search />
            </div>

            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `nav__item${isActive ? " nav__item--active" : ""}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                `nav__item${isActive ? " nav__item--active" : ""}`
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `nav__item${isActive ? " nav__item--active" : ""}`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `nav__item${isActive ? " nav__item--active" : ""}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="header__icon-container">
                <Link to="/cart">
                    <Button variant="icon">🛒 {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                    </Button>
                </Link>
            </div>

            <Button className="header__hamburger" onClick={toggleMobileMenu}>
                ☰
            </Button>

            {mobileMenuOpen && (
                <div className="header__mobile-menu" ref={mobileMenuRef}>
                    <div className="mobile-search">
                        <Search onSearch={closeMobileMenu} />
                    </div>
                    <ul className="mobile-nav-list">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav__item${isActive ? " nav__item--active" : ""}`
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `nav__item${isActive ? " nav__item--active" : ""}`
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav__item${isActive ? " nav__item--active" : ""}`
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `nav__item${isActive ? " nav__item--active" : ""}`
                                }
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
