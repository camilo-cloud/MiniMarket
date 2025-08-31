import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import ProductCard from "../components/ProductCard";
import BestOffers from "../components/BestOffers";
import banner1 from "../assets/images/bannerHorizontal1.webp";
import banner2 from "../assets/images/bannerHorizontal2.webp";
import banner3 from "../assets/images/bannerHorizontal3.webp";
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home({addToCart}) {
    return (
        <main>
            <Hero />
            <Link to="/products?category=cleaning">
                <div className="bannerHome">
                    <img  className="cleaningBanner" src={banner3} alt="Everything for a Cleaner Home" />
                </div>
            </Link>
            <CategoryCards />
            <Link to="products?category=fruits">
                <div className="bannerHome">
                    <img src={banner1} alt="Fresh Fruits and Veggies" />
                </div>
            </Link>
            <BestOffers addToCart={addToCart} />
            <Link to="/products?category=dairy">
                <div className="bannerHome">
                    <img src={banner2} alt="Everything for your delicious meals" />
                </div>
            </Link> 
        </main>
    )
}
