import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    // Toast notification would go here
    alert(`${item.name} added to cart!`);
  };

  return (
    <div style={styles.card}>
      <img src={item.img} alt={item.name} style={styles.image} />

      <div style={styles.info}>
        <h2 style={styles.name}>{item.name}</h2>
        <p style={styles.desc}>{item.desc}</p>

        <div style={styles.row}>
          <span style={styles.rating}>⭐ {item.rating}</span>
          <span style={styles.time}>{item.time}</span>
        </div>

        <h3 style={styles.price}>₹ {item.price}</h3>

        <button
          style={styles.btn}
          onClick={handleAddToCart}
          onMouseOver={(e) => (e.target.style.background = "#005fa3")}
          onMouseOut={(e) => (e.target.style.background = "#0077cc")}
        >
          🛒 ADD TO CART
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 3px 15px rgba(0,0,0,0.15)",
    marginBottom: "20px",
    gap: "15px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  image: {
    width: "230px",
    height: "160px",
    borderRadius: "10px",
    objectFit: "cover",
    flexShrink: 0,
  },
  info: {
    flex: 1,
  },
  name: {
    margin: "5px 0",
    color: "#333",
    fontSize: "20px",
  },
  desc: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center",
  },
  rating: {
    background: "#4caf50",
    color: "white",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "14px",
  },
  time: {
    color: "#555",
    fontSize: "14px",
  },
  price: {
    color: "#0077cc",
    marginBottom: "10px",
    fontSize: "24px",
  },
  btn: {
    background: "#0077cc",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
};

export default ProductCard;
