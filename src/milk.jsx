// import React from "react";

// function MILK() {
//   const items = [
//     {
//       id: 1,
//       name: "Full Cream Milk",
//       img: "https://images.pexels.com/photos/5060283/pexels-photo-5060283.jpeg",
//       desc: "Rich & thick full cream milk, perfect for desserts & tea.",
//       price: 65,
//       rating: 4.5,
//       time: "Daily Fresh"
//     },
//     {
//       id: 2,
//       name: "Toned Milk",
//       img: "https://images.pexels.com/photos/5028859/pexels-photo-5028859.jpeg",
//       desc: "Healthy toned milk with balanced nutrients.",
//       price: 55,
//       rating: 4.4,
//       time: "Daily Fresh"
//     },
//     {
//       id: 3,
//       name: "Cow Milk",
//       img: "https://media.istockphoto.com/id/1297005860/photo/raw-milk-being-poured-into-container.jpg?b=1&s=612x612&w=0&k=20&c=WFGK0Zvy5CMce1TvN9NxBfhlb-IONcY3IeYTqyYv3yc=",
//       desc: "Pure, natural cow milk with essential vitamins.",
//       price: 70,
//       rating: 4.6,
//       time: "Daily Fresh"
//     },
//     {
//       id: 4,
//       name: "Buffalo Milk",
//       img: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",
//       desc: "High-fat buffalo milk ideal for curd & paneer.",
//       price: 75,
//       rating: 4.3,
//       time: "Fresh"
//     },
//     {
//       id: 5,
//       name: "Organic Farm Milk",
//       img: "https://media.istockphoto.com/id/1003977092/photo/production-of-yogurt-in-a-farm-homemade-cows-milk-yoghurt.jpg?b=1&s=612x612&w=0&k=20&c=YclcPV73g5CtmwK3j1UNIWs1yhXQoSy8PQ_wUFntoP4=",
//       desc: "100% organic farm milk free from preservatives.",
//       price: 90,
//       rating: 4.7,
//       time: "Farm Fresh"
//     },
//     {
//       id: 6,
//       name: "Flavoured Milk – Badam",
//       img: "https://media.istockphoto.com/id/1341530316/photo/top-view-of-almond-milk-shake-on-wooden-table-with-almonds-in-background.jpg?b=1&s=612x612&w=0&k=20&c=LenNukbz7NEaphvgvBQoNlH4qN5Gue5okhFYSl0ZxwI=",
//       desc: "Delicious almond-flavoured milk drink.",
//       price: 45,
//       rating: 4.4,
//       time: "Ready to Drink"
//     },
//     {
//       id: 7,
//       name: "Flavoured Milk – Chocolate",
//       img: "https://media.istockphoto.com/id/1286560340/photo/chocolate-milk-shake-milkshake-glass-bottle-straw-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=YnbLGhDw_6MvP16LFC9NZD3uqfvvyg6bXQOnG9roT1k=",
//       desc: "Sweet chocolate milk for kids & adults.",
//       price: 50,
//       rating: 4.6,
//       time: "Ready to Drink"
//     },
//     {
//       id: 8,
//       name: "Curd (Dahi)",
//       img: "https://images.pexels.com/photos/7965898/pexels-photo-7965898.jpeg",
//       desc: "Thick homemade curd packed with probiotics.",
//       price: 40,
//       rating: 4.5,
//       time: "Fresh"
//     },
//     {
//       id: 9,
//       name: "Paneer",
//       img: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png",
//       desc: "Soft & fresh paneer made from pure milk.",
//       price: 220,
//       rating: 4.8,
//       time: "Fresh"
//     },
//     {
//       id: 10,
//       name: "Ghee",
//       img: "https://images.pexels.com/photos/7965898/pexels-photo-7965898.jpeg",
//       desc: "Traditional pure cow ghee with rich aroma.",
//       price: 450,
//       rating: 4.9,
//       time: "Premium"
//     },
//     {
//       id: 11,
//       name: "Butter",
//       img: "https://images.pexels.com/photos/5949890/pexels-photo-5949890.jpeg",
//       desc: "Creamy butter perfect for cooking & breakfast.",
//       price: 110,
//       rating: 4.6,
//       time: "Fresh"
//     },
//     {
//       id: 12,
//       name: "Cheese Slices",
//       img: "https://images.pexels.com/photos/27569474/pexels-photo-27569474.jpeg",
//       desc: "Soft cheese slices ideal for sandwiches.",
//       price: 95,
//       rating: 4.4,
//       time: "Packed"
//     },
//     {
//       id: 13,
//       name: "Milk Powder",
//       img: "https://images.pexels.com/photos/11501481/pexels-photo-11501481.jpeg",
//       desc: "Instant milk powder for daily use.",
//       price: 180,
//       rating: 4.3,
//       time: "Packed"
//     },
//     {
//       id: 14,
//       name: "Fresh Lassi",
//       img: "https://media.istockphoto.com/id/2214087109/photo/lassi-in-clay-cup-topped-with-dry-fruits.jpg?b=1&s=612x612&w=0&k=20&c=5RE7AY226iOLxqh5PCZNbLgVVZpu02lPBNDcRSzcQ3k=",
//       desc: "Refreshing sweet lassi made with fresh curd.",
//       price: 35,
//       rating: 4.7,
//       time: "Fresh"
//     },
//     {
//       id: 15,
//       name: "Fresh Butter Milk",
//       img: "https://media.istockphoto.com/id/1147734167/photo/spiced-buttermilk-indian-traditional-summer-drink.jpg?b=1&s=612x612&w=0&k=20&c=MKszeknUHlJade6ZAiOAIwzFokrNDYGKnZUn9Su5Tzc=",
//       desc: "Healthy buttermilk perfect for digestion.",
//       price: 30,
//       rating: 4.5,
//       time: "Fresh"
//     }
//   ];

//   return (
//     <div style={styles.page}>
//       <h1 style={styles.title}>🥛 Fresh Milk Products</h1>

//       {items.map((item) => (
//         <div key={item.id} style={styles.card}>
//           <img src={item.img} alt={item.name} style={styles.image} />

//           <div style={styles.info}>
//             <h2 style={styles.name}>{item.name}</h2>
//             <p style={styles.desc}>{item.desc}</p>

//             <div style={styles.row}>
//               <span style={styles.rating}>⭐ {item.rating}</span>
//               <span style={styles.time}>{item.time}</span>
//             </div>

//             <h3 style={styles.price}>₹ {item.price}</h3>

//             <button style={styles.btn}>ADD TO CART</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// const styles = {
//   page: {
//     padding: "30px",
//     fontFamily: "Arial"
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "25px",
//     color: "#0077cc",
//     fontSize: "35px"
//   },
//   card: {
//     display: "flex",
//     background: "#fff",
//     padding: "15px",
//     borderRadius: "12px",
//     boxShadow: "0 3px 15px rgba(0,0,0,0.15)",
//     marginBottom: "20px",
//     gap: "15px"
//   },
//   image: {
//     width: "230px",
//     height: "160px",
//     borderRadius: "10px",
//     objectFit: "cover"
//   },
//   info: {
//     flex: 1
//   },
//   name: {
//     margin: "5px 0",
//     color: "#333"
//   },
//   desc: {
//     fontSize: "14px",
//     color: "#777",
//     marginBottom: "10px"
//   },
//   row: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "10px"
//   },
//   rating: {
//     background: "#4caf50",
//     color: "white",
//     padding: "4px 8px",
//     borderRadius: "6px"
//   },
//   time: {
//     color: "#555"
//   },
//   price: {
//     color: "#0077cc",
//     marginBottom: "10px"
//   },
//   btn: {
//     background: "#0077cc",
//     color: "white",
//     padding: "10px 15px",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     fontSize: "16px"
//   }
// };

// export default MILK;



import React, { useState, useMemo } from "react";
import ProductCard from "./components/ProductCard";
import FilterBar from "./components/FilterBar";
import milkProducts from "./data/milkProducts.json";

function MILK() {
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
    let products = [...milkProducts];

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
      <h1 style={styles.title}>🥛 Fresh Milk Products</h1>
      <p style={styles.subtitle}>
        Found {filteredProducts.length} milk products
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
    color: "#0077cc",
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

export default MILK;

