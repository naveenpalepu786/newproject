

import React, { useState, useMemo } from "react";
import ProductCard from "./components/ProductCard";
import FilterBar from "./components/FilterBar";
import nonvegProducts from "./data/nonvegProducts.json";

function Nonveg() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    sortBy: "default",
    minPrice: 0,
    maxPrice: 500,
  });

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    let products = [...nonvegProducts];

    // Search filter
    if (filters.searchTerm) {
      products = products.filter(
        (item) =>
          item.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          item.desc.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    // Price filter
    products = products.filter(
      (item) => item.price >= filters.minPrice && item.price <= filters.maxPrice
    );

    // Sorting
    switch (filters.sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        products.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return products;
  }, [filters]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const lastIndex = page * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const paginatedProducts = filteredProducts.slice(firstIndex, lastIndex);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🍗 Non-Veg Specials</h1>
      <p style={styles.subtitle}>
        Found {filteredProducts.length} non-veg products
      </p>

      <FilterBar onFilterChange={handleFilterChange} />

      {paginatedProducts.length > 0 ? (
        <>
          {paginatedProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}

          {/* Pagination */}
          <div style={styles.pagination}>
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              style={styles.navBtn}
            >
              ⬅ Previous
            </button>

            <span style={styles.pageInfo}>
              Page {page} / {totalPages}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              style={styles.navBtn}
            >
              Next ➡
            </button>
          </div>

          {/* Number pagination */}
          <div style={styles.numberPagination}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setPage(index + 1)}
                style={{
                  padding: "8px 15px",
                  margin: "5px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  background: page === index + 1 ? "#0077cc" : "#ddd",
                  color: page === index + 1 ? "white" : "black",
                  fontSize: "16px",
                  fontWeight: page === index + 1 ? "bold" : "normal",
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div style={styles.noResults}>
          <p>No products found. Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    fontFamily: "Arial",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    color: "#d9534f",
    fontSize: "35px",
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "20px",
    fontSize: "16px",
  },
  pagination: {
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "20px",
  },
  navBtn: {
    background: "#ff6600",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "5px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  pageInfo: {
    margin: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
  },
  numberPagination: {
    textAlign: "center",
    marginTop: "15px",
  },
  noResults: {
    textAlign: "center",
    padding: "40px",
    fontSize: "18px",
    color: "#999",
  },
};

export default Nonveg;