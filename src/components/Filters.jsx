// Import necessary hooks and CSS for the component.
import { useMemo, useState } from "react";
import "./Filters.css";

// Define the Filters component, which allows users to filter products.
export default function Filters({ selectedFilters, onFilterChange, productData, minPrice, maxPrice }) {
  // State to manage which filter sections are open.
  const [openSections, setOpenSections] = useState(["category"]); // Keep category open by default.

  // Memoize unique lists of categories and names to avoid re-calculating on every render.
  const uniqueCategories = useMemo(() => [...new Set(productData.map(p => p.category))], [productData]);
  const uniqueNames = useMemo(() => [...new Set(productData.map(p => p.name))], [productData]);

  // Filter names based on the selected categories.
  const filteredNames = useMemo(() => {
    // If no category is selected, return all unique names.
    if (!selectedFilters.category || selectedFilters.category.length === 0) {
      return uniqueNames;
    }
    // Otherwise, return names that belong to the selected categories.
    return [...new Set(
      productData
        .filter(product => selectedFilters.category.includes(product.category))
        .map(p => p.name)
    )];
  }, [selectedFilters.category, productData, uniqueNames]);

  // Toggle the open/closed state of a filter section.
  const toggleSection = (section) => {
    setOpenSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  // Allow toggling with Enter/Space for accessibility.
  const handleTitleKey = (section, e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSection(section);
    }
  };

  // Handle changes to the checkbox filters.
  const handleCheckboxChange = (filterType, value) => {
    const newFilters = {
      ...selectedFilters,
      [filterType]: selectedFilters[filterType].includes(value)
        ? selectedFilters[filterType].filter(item => item !== value) // Remove filter.
        : [...selectedFilters[filterType], value] // Add filter.
    };
    onFilterChange(newFilters);
  };

  // Handle changes to the price filters.
  const handlePriceChange = (type, value) => {
    onFilterChange({
      ...selectedFilters,
      [type]: value
    });
  };

  return (
    <div className="filters__container">
      {/* Category Filter Section */}
      <div className="filter__section">
        <h3
          className="filter__title"
          role="button"
          tabIndex={0}
          aria-expanded={openSections.includes("category")}
          onClick={() => toggleSection("category")}
          onKeyDown={(e) => handleTitleKey("category", e)}
        >
          <span>Category</span>
          <span className={`chevron ${openSections.includes("category") ? "open" : ""}`} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </h3>

        {openSections.includes("category") && (
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

      {/* Name Filter Section */}
      <div className="filter__section">
        <h3
          className="filter__title"
          role="button"
          tabIndex={0}
          aria-expanded={openSections.includes("name")}
          onClick={() => toggleSection("name")}
          onKeyDown={(e) => handleTitleKey("name", e)}
        >
          <span>Name</span>
          <span className={`chevron ${openSections.includes("name") ? "open" : ""}`} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </h3>

        {openSections.includes("name") && (
          <div className="filter__options">
            {filteredNames.length > 0 ? (
              filteredNames.map(name => (
                <label key={name} className="filter__option">
                  <input
                    type="checkbox"
                    checked={selectedFilters.name.includes(name)}
                    onChange={() => handleCheckboxChange("name", name)}
                  />
                  {name}
                </label>
              ))
            ) : (
              <p className="no-options">No names available for selected categories</p>
            )}
          </div>
        )}
      </div>

      {/* Price Filter Section */}
      <div className="filter__section">
        <h3
          className="filter__title"
          role="button"
          tabIndex={0}
          aria-expanded={openSections.includes("price")}
          onClick={() => toggleSection("price")}
          onKeyDown={(e) => handleTitleKey("price", e)}
        >
          <span>Price</span>
          <span className={`chevron ${openSections.includes("price") ? "open" : ""}`} aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </h3>

        {openSections.includes("price") && (
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
