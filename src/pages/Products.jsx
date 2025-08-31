import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productData from "../data/productData.js";
import Filters from "../components/Filters";
import "./Products.css";

export default function Products({addToCart}){
    // Calculate actual min and max prices
    const allPrices = productData.map(product => product.price);
    const minPrice = Math.min(...allPrices);
    const maxPrice = Math.max(...allPrices);

    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        name: [],
        priceMin: "",
        priceMax: ""
    });

    // Function to handle filter changes
    const handleFilterChange = (newFilters) => {
        setSelectedFilters(newFilters);
    };

    // Filter products based on selectedFilters
    const filteredProducts = productData.filter(product => {
        // Category filter
        const matchesCategory = selectedFilters.category.length === 0 || 
                              selectedFilters.category.includes(product.category);
        
        // Name filter
        const matchesName = selectedFilters.name.length === 0 ||
                          selectedFilters.name.includes(product.name);
        
        // Price filter (numeric inputs)
        const priceMin = selectedFilters.priceMin ? Number(selectedFilters.priceMin) : minPrice;
        const priceMax = selectedFilters.priceMax ? Number(selectedFilters.priceMax) : maxPrice;
        const matchesPrice = product.price >= priceMin && product.price <= priceMax;
        
        return matchesCategory && matchesName && matchesPrice;
    });

    return (
        <section className="products__section-container">
            <h2 className="title">PRODUCTS</h2>
            <div className="breadcrumb">
                <Link to="/" className="breadcrumb__link">Home</Link>
                <span className="breadcrumb__separator">&gt;</span>
                <Link to="/products" className="breadcrumb__link">Products</Link>
                {/* Dynamic category if selected */}
                {selectedFilters.category.length > 0 && (
                    <>
                        <span className="breadcrumb__separator">&gt;</span>
                        <span className="breadcrumb__current">
                            {selectedFilters.category[0]}
                            {selectedFilters.category.length > 1 && " + more"}
                        </span>
                    </>
                )}
            </div>
            <div className="filterProducts__container">
                <Filters 
                    selectedFilters={selectedFilters}
                    onFilterChange={handleFilterChange}
                    productData={productData}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                />
                <div className="products__container">
                    {filteredProducts.map((product) =>
                        <ProductCard 
                            key={product.id} 
                            id={product.id} 
                            name={product.name} 
                            category={product.category} 
                            price={product.price} 
                            image={product.image} 
                            isOffer={product.isOffer}
                            addToCart={addToCart}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}