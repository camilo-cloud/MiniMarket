import CartItem from "../components/CartItem";
import "./CartPage.css"

export default function CartPage({ cart, updateQuantity, removeFromCart, clearCart, cartTotal, totalItems }) {
    if (cart.length === 0) {
        return (
          <div className="cartpage-empty">
            <h2>🛒 Your cart is empty</h2>
            <p>Start shopping to add items!</p>
          </div>
        );
      }
    return (
      <div className="cartpage">
        <div className="cartpage-products">
          <div className="cartpage-header">
            <span className="cartpage-product-name">Product</span>
            <span className="cartpage-product-price">Price</span>
            <span className="cartpage-product-quantity">Quantity</span>
            <span className="cartpage-product-total">Subtotal</span>
          </div>
          
          <div className="cartpage-items-list">
            {cart.map(product => (
              <CartItem 
                key={product.id} 
                product={product}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          
          <div className="cartpage-footer">
            {<button className="cartpage-clear-btn" onClick={clearCart}>
              Clear Cart
            </button>}
          </div>
        </div>
  
        {/* 2. ORDER SUMMARY */}
        <div className="cartpage-summary">
          <h3>Order Summary</h3>
          <div className="cartpage-summary-details">
            <div className="cartpage-summary-row">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="cartpage-summary-row">
              <span>Sub Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="cartpage-summary-row">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="cartpage-summary-row">
              <span>Taxes</span>
              <span>$0.00</span>
            </div>
            <div className="cartpage-summary-row cartpage-total-row">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="cartpage-checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    );
  }