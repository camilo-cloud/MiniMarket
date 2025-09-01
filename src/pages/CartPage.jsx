import CartItem from "../components/CartItem";

export default function CartPage({ cart, updateQuantity, removeFromCart }){
    if(cart.length === 0){
        return(
            <p>Your cart is empty</p>
        )
    }
    return(
        cart.map(product => 
            <CartItem 
                key={product.id} 
                product={product}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
            />
        )
    )
}