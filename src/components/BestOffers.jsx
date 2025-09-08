// Import necessary dependencies and components.
import { Link } from "react-router-dom";
import "./BestOffers.css";
import ProductCard from "./ProductCard.jsx";
import productData from "../data/productData.js";
import smallBanner from "../assets/images/buyBanner_optimized.webp";

// Define the BestOffers component, which displays the best offers.
export default function BestOffers({addToCart}) {
  // Filter the product data to get only the products that are on offer, and then select the first 3.
  const offers = productData.filter(p => p.isOffer).slice(0, 3);

  return (
    // Render the BestOffers section.
    <section className="bestOffers">
      {/* Title for the best offers section. */}
      <h2 className="bestOffers__title">Best Offers</h2>

      {/* Row containing the offers cards and a banner. */}
      <div className="offersRow">
        {/* Container for the product cards. */}
        <div className="offersCards">
          {/* Map over the offers array and render a ProductCard for each offer. */}
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

        {/* Link to the products page with a promotional banner. */}
        <Link to="/products" className="offersBanner" aria-label="Go to products">
          <img src={smallBanner} alt="Promotional banner" />
        </Link>
      </div>
    </section>
  );
}
