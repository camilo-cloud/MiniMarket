// Search.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "./Button";
import products from "../data/productData";
import "./Header.css";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setResults([]);
      setShowDropdown(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered.slice(0, 5)); // limit to 5 results
    setShowDropdown(true);
  }, [searchTerm]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header__search-wrapper" ref={dropdownRef}>
      <div className="header__search-bar">
        <input
          className="header__search-input"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button variant="secondary" onClick={handleSearch}>
          Search
        </Button>
      </div>

      {showDropdown && results.length > 0 && (
        <ul className="search-dropdown">
          {results.map((product) => (
            <li key={product.id}>
              <Link
                to={`/products?search=${encodeURIComponent(product.name)}`}
                onClick={() => {
                  setSearchTerm("");
                  setShowDropdown(false);
                }}
              >
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

