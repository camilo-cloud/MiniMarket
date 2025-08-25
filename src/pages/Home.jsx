import Hero from "../components/Hero";
import CategoryCards from "../components/CategoryCards";
import ProductCard from "../components/ProductCard";
import BestOffers from "../components/BestOffers";

export default function Home() {
    return (
        <main>
            <Hero />
            <CategoryCards />
            <BestOffers />
        </main>
    )
}