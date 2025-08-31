// ProductCard.jsx
import "./ProductCard.css";

export default function ProductCard({ id, name, category, price, image, isOffer, addToCart }) {
  // Ensure price is always treated as a number
  const numericPrice = Number(price);

  // Calculate discounted price if offer is true
  const discountRate = 0.15;
  const discountedPrice = isOffer ? (numericPrice - numericPrice * discountRate).toFixed(2) : null;

  return (
    <div className="card__container">
      <div className="product__img-container">
        <img className="product__img" src={image} alt={name} />
      </div>

      <div className="product__text">
        <h3 className="product__name">{name}</h3>

        {isOffer && (
          <p className="isOffer">15% OFF</p>
        )}

        <div className="price__container">
          {isOffer ? (
            <>
              <p className="product__price original">${numericPrice.toFixed(2)}</p>
              <p className="product__price discounted">${discountedPrice}</p>
            </>
          ) : (
            <p className="product__price">${numericPrice.toFixed(2)}</p>
          )}
        </div>
      </div>

      <button
        className="addToCart"
        aria-label={`Add ${name} to Cart`}
        onClick={() => addToCart({ 
          id, name, price: numericPrice, image, isOffer 
        })}
        
      >
        Add to Cart
      </button>
    </div>
  );
}


