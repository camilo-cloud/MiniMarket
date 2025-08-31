import { Link } from "react-router-dom";
import "./BestOffers.css";
import ProductCard from "./ProductCard.jsx";
import productData from "../data/productData.js";
import smallBanner from "../assets/images/buyBanner_optimized.webp";

export default function BestOffers({addToCart}) {
  const offers = productData.filter(p => p.isOffer).slice(0, 3);

  return (
    <section className="bestOffers">
      <h2 className="bestOffers__title">Best Offers</h2>

      <div className="offersRow">
        <div className="offersCards">
          {offers.map(p => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              category={p.category}
              price={p.price}
              image={p.image}
              isOffer={p.isOffer}
              addToCart={addToCart}
            />
          ))}
        </div>

        <Link to="/products" className="offersBanner" aria-label="Go to products">
          <img src={smallBanner} alt="Promotional banner" />
        </Link>
      </div>
    </section>
  );
}
