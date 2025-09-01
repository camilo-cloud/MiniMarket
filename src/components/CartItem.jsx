import "./CartItem.css";
import ProductCard from "./ProductCard";

export default function CartItem({product, updateQuantity, removeFromCart}){
    console.log(product)
    return(
        <section className="cart__item">
            <button 
                onClick={() => removeFromCart(product.id)}   
                aria-label="Remove item from cart">X
            </button>
            <div className="product__picture">
                <img src={product.image} alt={product.name} />
                <h3 className="cart__item-name">{product.name}</h3>
            </div>
            <div className="cart__item-details">
                <p className="cart__item-price">${product.price}</p>
                <div className="quantity">
                    <button
                        aria-label="Decrease quantity"
                        onClick={() => updateQuantity(product.id, product.quantity - 1)}>    
                            -
                    </button>
                    <input type="text" value={product.quantity} />
                    <button 
                    aria-label="Increase quantity"
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}>
                        +
                    </button>
                </div>
                <p>${(product.price * product.quantity).toFixed(2)}</p>
            </div>
        </section>


    )
}

