import { useState } from "react";
import "./Filters.css";

export default function Filters({ selectedFilters, onFilterChange, productData, minPrice, maxPrice }) {
    const [openSection, setOpenSection] = useState(null);

    // Obtener valores únicos para los filtros
    const uniqueCategories = [...new Set(productData.map(p => p.category))];
    const uniqueNames = [...new Set(productData.map(p => p.name))];

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleCheckboxChange = (filterType, value) => {
        const newFilters = {
            ...selectedFilters,
            [filterType]: selectedFilters[filterType].includes(value)
                ? selectedFilters[filterType].filter(item => item !== value)
                : [...selectedFilters[filterType], value]
        };
        onFilterChange(newFilters);
    };

    const handlePriceChange = (type, value) => {
        onFilterChange({
            ...selectedFilters,
            [type]: value
        });
    };

    return (
        <div className="filters__container">
            {/* Category filter */}
            <div className="filter__section">
                <h3 onClick={() => toggleSection("category")} className="filter__title">
                    Category {openSection === "category" ? "▲" : "▼"}
                </h3>
                {openSection === "category" && (
                    <div className="filter__options">
                        {uniqueCategories.map(category => (
                            <label key={category} className="filter__option">
                                <input
                                    type="checkbox"
                                    checked={selectedFilters.category.includes(category)}
                                    onChange={() => handleCheckboxChange("category", category)}
                                />
                                {category}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Name filter */}
            <div className="filter__section">
                <h3 onClick={() => toggleSection("name")} className="filter__title">
                    Name {openSection === "name" ? "▲" : "▼"}
                </h3>
                {openSection === "name" && (
                    <div className="filter__options">
                        {uniqueNames.map(name => (
                            <label key={name} className="filter__option">
                                <input
                                    type="checkbox"
                                    checked={selectedFilters.name.includes(name)}
                                    onChange={() => handleCheckboxChange("name", name)}
                                />
                                {name}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Price filter */}
            <div className="filter__section">
                <h3 onClick={() => toggleSection("price")} className="filter__title">
                    Price {openSection === "price" ? "▲" : "▼"}
                </h3>
                {openSection === "price" && (
                    <div className="filter__options">
                        <div className="price-input__group">
                            <label>Min: $</label>
                            <input
                                type="number"
                                value={selectedFilters.priceMin}
                                onChange={(e) => handlePriceChange("priceMin", e.target.value)}
                                min={0}
                                placeholder={minPrice}
                                step="0.01"
                            />
                        </div>
                        <div className="price-input__group">
                            <label>Max: $</label>
                            <input
                                type="number"
                                value={selectedFilters.priceMax}
                                onChange={(e) => handlePriceChange("priceMax", e.target.value)}
                                min={0}
                                placeholder={maxPrice}
                                step="0.01"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}