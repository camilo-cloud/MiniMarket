import ProductCard from "../components/ProductCard";
import productData from "../data/productData.js";
import "./Products.css";

export default function Products() {
    return (
        <div className="products__container">
            {productData.map((product)=>
                    <ProductCard id={product.id} name={product.name} category={product.category} price={product.price} image={product.image} isOffer={product.isOffer}/>
            )}
        </div>
    )
}