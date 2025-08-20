import "./BestOffers.css"
import ProductCard from "./ProductCard.jsx";
import productData from "../data/productData.js";
import smallBanner from "../assets/images/buyBanner_optimized.webp"

export default function BestOffers(){
    const filterProducts = productData.filter(product => product.isOffer === true).slice(0, 3);

    return(
        <section className="bestOffers__container">
            <h2 className="bestOffers__title">Best Offers</h2>
            <div className="cards__container">
                {filterProducts.map(filterProduct=>
                    <ProductCard key={filterProduct.id} id={filterProduct.id} name={filterProduct.name} category={filterProduct.category} price={filterProduct.price} image={filterProduct.image} isOffer={filterProduct.isOffer}/>
                )}
                <img className="smallBanner" src={smallBanner} alt="promotional-banner" />
            </div>
            
        </section>
    )
}