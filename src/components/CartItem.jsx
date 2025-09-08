// Import the CSS for this component.
import "./CartItem.css";

// Define the CartItem component, which displays a single item in the cart.
export default function CartItem({product, updateQuantity, removeFromCart}){
    return(
        // Render the CartItem section.
        <section className="cart__item">
            {/* Button to remove the item from the cart. */}
            <button
                onClick={() => removeFromCart(product.id)}
                aria-label="Remove item from cart">X
            </button>
            {/* Container for the product picture and name. */}
            <div className="product__picture">
                <img src={product.image} alt={product.name} />
                <h3 className="cart__item-name">{product.name}</h3>
            </div>
            {/* Container for the item details, including price, quantity, and total. */}
            <div className="cart__item-details">
                {/* Display the price of the item. */}
                <p className="cart__item-price">${product.price}</p>
                {/* Container for the quantity controls. */}
                <div className="quantity">
                    {/* Button to decrease the quantity of the item. */}
                    <button
                        className="decrease__button"
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}>
                            -
                    </button>
                    {/* Input to display the current quantity of the item. */}
                    <input className="quantity__input" type="text" value={product.quantity} readOnly />
                    {/* Button to increase the quantity of the item. */}
                    <button
                        className="increase__button"
                        aria-label="Increase quantity"
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}>
                            +
                    </button>
                </div>
                {/* Display the total price of the item (price * quantity). */}
                <p className="cart__item-total">${(product.price * product.quantity).toFixed(2)}</p>
            </div>
        </section>
    )
}