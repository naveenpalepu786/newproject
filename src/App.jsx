import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HOME from "./home";
import NONVEG from "./nonveg";
import Veg from "./veg";
import MILK from "./milk";
import ABOUTUS from "./aboutus";
import Cart from "./Cart";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory";
import "./App.css";

function App() {

  // ⭐ CORRECT REDUX STATE NAME
  const cartItems = useSelector((state) => state.cart.cartItems);

  // ⭐ AVOID ERROR: reduce only works when cartItems is an array
  const cartCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-lg">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-4" to="/home">
            🍔 FoodHub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  🏠 HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/veg">
                  🥗 VEG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nonveg">
                  🍗 NONVEG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/milk">
                  🥛 MILK
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  ℹ️ ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  📋 ORDERS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link badge bg-danger position-relative"
                  to="/cart"
                  style={{ fontSize: "16px" }}
                >
                  🛒 CART
                  {cartCount > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark"
                      style={{ marginLeft: "-10px" }}
                    >
                      {cartCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/home" element={<HOME />} />
        <Route path="/nonveg" element={<NONVEG />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/milk" element={<MILK />} />
        <Route path="/aboutus" element={<ABOUTUS />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/" element={<HOME />} />
      </Routes>

      {/* FOOTER */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0">© 2024 FoodHub - All Rights Reserved</p>
        <p className="text-muted">Made with ❤️ for Food Lovers</p>
      </footer>
    </>
  );
}

export default App;
