import logo from "../assets/images/shopping_cart.png"
import "./Header.css"


export default function Header() {
    return (
        <header className="header__container">
            <div className="header__logo">
                <img className="icon" src={logo} alt="logo" />
                <h1>MiniMarket</h1>
            </div>
            <nav className="header__nav">
                <ul className="nav__list">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}