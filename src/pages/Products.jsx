import { useState } from "react";
import ProductCard from "../components/ProductCard";
import productData from "../data/productData.js";
import Filters from "../components/Filters";
import "./Products.css";

export default function Products() {
    // Calcular precios mínimos y máximos reales
    const allPrices = productData.map(product => product.price);
    const minPrice = Math.min(...allPrices);
    const maxPrice = Math.max(...allPrices);

    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
        name: [],
        priceMin: "",
        priceMax: ""
    });

    // Función para manejar cambios en filtros
    const handleFilterChange = (newFilters) => {
        setSelectedFilters(newFilters);
    };

    // Filtrar productos basado en selectedFilters
    const filteredProducts = productData.filter(product => {
        // Filtro por categoría
        const matchesCategory = selectedFilters.category.length === 0 || 
                              selectedFilters.category.includes(product.category);
        
        // Filtro por nombre
        const matchesName = selectedFilters.name.length === 0 ||
                          selectedFilters.name.includes(product.name);
        
        // Filtro por precio (inputs numéricos)
        const priceMin = selectedFilters.priceMin ? Number(selectedFilters.priceMin) : minPrice;
        const priceMax = selectedFilters.priceMax ? Number(selectedFilters.priceMax) : maxPrice;
        const matchesPrice = product.price >= priceMin && product.price <= priceMax;
        
        return matchesCategory && matchesName && matchesPrice;
    });

    return (
        <section className="products__section-container">
            <h2 className="title">PRODUCTS</h2>
            <div className="breadcrumb">
                Home &gt; Products &gt;
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
                        />
                    )}
                </div>
            </div>
        </section>
    );
}