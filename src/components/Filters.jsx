import { useMemo, useState } from "react";
import "./Filters.css";

export default function Filters({ selectedFilters, onFilterChange, productData, minPrice, maxPrice }) {
  const [openSections, setOpenSections] = useState(["category"]); // keep category open by default

  // memoize unique lists
  const uniqueCategories = useMemo(() => [...new Set(productData.map(p => p.category))], [productData]);
  const uniqueNames = useMemo(() => [...new Set(productData.map(p => p.name))], [productData]);

  // names filtered by selected categories (same logic you had)
  const filteredNames = useMemo(() => {
    if (!selectedFilters.category || selectedFilters.category.length === 0) {
      return uniqueNames;
    }
    return [...new Set(
      productData
        .filter(product => selectedFilters.category.includes(product.category))
        .map(p => p.name)
    )];
  }, [selectedFilters.category, productData, uniqueNames]);

  const toggleSection = (section) => {
    setOpenSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  // allow toggling with Enter/Space for accessibility
  const handleTitleKey = (section, e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleSection(section);
    }
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
      {/* Category */}
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
            {/* simple chevron-down SVG */}
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

      {/* Name */}
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

      {/* Price */}
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
