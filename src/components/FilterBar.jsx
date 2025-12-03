import React, { useState } from "react";

function FilterBar({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilterChange({ searchTerm: term, sortBy, minPrice, maxPrice });
  };

  const handleSort = (e) => {
    const sort = e.target.value;
    setSortBy(sort);
    onFilterChange({ searchTerm, sortBy: sort, minPrice, maxPrice });
  };

  const handlePriceRange = () => {
    onFilterChange({ searchTerm, sortBy, minPrice, maxPrice });
  };

  return (
    <div style={styles.filterContainer}>
      <div style={styles.filterRow}>
        {/* SEARCH */}
        <div style={styles.filterGroup}>
          <label style={styles.label}>Search:</label>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            style={styles.input}
          />
        </div>

        {/* SORT */}
        <div style={styles.filterGroup}>
          <label style={styles.label}>Sort By:</label>
          <select value={sortBy} onChange={handleSort} style={styles.select}>
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* PRICE RANGE */}
      <div style={styles.priceRange}>
        <label style={styles.label}>Price Range:</label>
        <div style={styles.priceInputs}>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            style={styles.priceInput}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={styles.priceInput}
          />
          <button onClick={handlePriceRange} style={styles.applyBtn}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  filterContainer: {
    background: "#f5f5f5",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  filterRow: {
    display: "flex",
    gap: "20px",
    marginBottom: "15px",
    flexWrap: "wrap",
  },
  filterGroup: {
    flex: 1,
    minWidth: "250px",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  select: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    boxSizing: "border-box",
    cursor: "pointer",
  },
  priceRange: {
    borderTop: "1px solid #ddd",
    paddingTop: "15px",
  },
  priceInputs: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  priceInput: {
    width: "120px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
  },
  applyBtn: {
    background: "#0077cc",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default FilterBar;
