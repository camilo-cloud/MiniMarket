// Import the specific stylesheet for this component.
import "./ProductCard.css";

// The ProductCard component displays a single product with its details.
// It receives product information and an addToCart function as props.
export default function ProductCard({ id, name, price, image, isOffer, addToCart }) {
  // Ensure the price is treated as a numeric value for calculations.
  const numericPrice = Number(price);

  // Calculate the discounted price if the product is on offer (isOffer is true).
  const discountRate = 0.15; // 15% discount
  const discountedPrice = isOffer ? (numericPrice - numericPrice * discountRate).toFixed(2) : null;

  return (
    <div className="card__container">
      <div className="product__img-container">
        <img className="product__img" src={image} alt={name} loading="lazy" />
      </div>

      <div className="product__text">
        <h3 className="product__name">{name}</h3>
        
        {/* Display a badge if the product is on offer. */}
        {isOffer && (
          <p className="isOffer">15% OFF</p>
        )}

        <div className="price__container">
          {/* Conditional rendering for the price: displays original and discounted price if on offer. */}
          {isOffer ? (
            <>
              <p className="product__price original">${numericPrice.toFixed(2)}</p>
              <p className="product__price discounted">${discountedPrice}</p>
            </>
          ) : (
            // Otherwise, just display the regular price.
            <p className="product__price">${numericPrice.toFixed(2)}</p>
          )}
        </div>
      </div>

      {/* The button to add the product to the shopping cart. */}
      <button
        className="addToCart"
        aria-label={`Add ${name} to Cart`}
        // When clicked, it calls the addToCart function with the product's details.
        // The price passed is the original numeric price. The cart can decide how to handle offers.
        onClick={() => addToCart({ 
          id, name, price: numericPrice, image, isOffer 
        })}
      >
        Add to Cart
      </button>
    </div>
  );
}
