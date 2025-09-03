import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productData from "../data/productData.js";
import Filters from "../components/Filters";
import "./Products.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Products({ addToCart }) {
  const allPrices = productData.map(product => product.price);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);

  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    name: [],
    priceMin: "",
    priceMax: ""
  });

  const query = useQuery();
  const searchTerm = query.get("search");

  useEffect(() => {
    // Reset filters when search term changes
    setSelectedFilters({
      category: [],
      name: [],
      priceMin: "",
      priceMax: ""
    });
  }, [searchTerm]);

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);
  };

  const filteredProducts = productData.filter(product => {
    // Search term filter
    const matchesSearchTerm = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    // Category filter
    const matchesCategory = selectedFilters.category.length === 0 ||
      selectedFilters.category.includes(product.category);

    // Name filter
    const matchesName = selectedFilters.name.length === 0 ||
      selectedFilters.name.includes(product.name);

    // Price filter
    const priceMinFilter = selectedFilters.priceMin ? Number(selectedFilters.priceMin) : minPrice;
    const priceMaxFilter = selectedFilters.priceMax ? Number(selectedFilters.priceMax) : maxPrice;
    const matchesPrice = product.price >= priceMinFilter && product.price <= priceMaxFilter;

    return matchesSearchTerm && matchesCategory && matchesName && matchesPrice;
  });

  return (
    <section className="products__section-container">
      <h2 className="title">PRODUCTS</h2>
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb__link">Home</Link>
        <span className="breadcrumb__separator">&gt;</span>
        <Link to="/products" className="breadcrumb__link">Products</Link>
        {searchTerm && (
          <>
            <span className="breadcrumb__separator">&gt;</span>
            <span className="breadcrumb__current">Search: "{searchTerm}"</span>
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
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
            )))
            : <p>No products found for "{searchTerm}"</p>}
        </div>
      </div>
    </section>
  );
}
