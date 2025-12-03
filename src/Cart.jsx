import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, addToCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Discount states
  const [buttonDiscount, setButtonDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  // Valid coupons
  const coupons = {
    SAVE30: 50,
    SAVE40: 30,
    SAVE10: 10,
    WELCOME20: 20,
    FIRST50: 50,
  };

  const applyCoupon = () => {
    const upperCoupon = coupon.toUpperCase();
    if (coupons[upperCoupon]) {
      setCouponDiscount(coupons[upperCoupon]);
      setCouponMessage(`✅ Coupon applied! ${coupons[upperCoupon]}% OFF`);
    } else {
      setCouponDiscount(0);
      setCouponMessage("❌ Invalid coupon code");
    }
  };

  // Calculate savings
  const buttonSaving = (totalPrice * buttonDiscount) / 100;
  const couponSaving = (totalPrice * couponDiscount) / 100;
  const priceAfterDiscount = totalPrice - buttonSaving - couponSaving;

  // GST calculation (18%)
  const gstPercent = 18;
  const gstAmount = (priceAfterDiscount * gstPercent) / 100;

  // Final Net Amount
  const netAmount = priceAfterDiscount + gstAmount;

  return (
    <div className="container mt-4">
      <h1 className="text-center text-warning fw-bold mb-4">🛒 Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center py-5">
          <h3>Your cart is empty 😢</h3>
          <p className="text-muted">Start adding items to your cart!</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate("/veg")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* CART ITEMS */}
          {cartItems.map((item) => (
            <div className="card shadow-lg p-4 mb-4 rounded-4" key={item.id}>
              <div className="row g-3 align-items-center">
                <div className="col-md-3 text-center">
                  <img
                    src={item.img}
                    className="img-fluid rounded-4"
                    style={{ height: "150px", objectFit: "cover" }}
                    alt={item.name}
                  />
                </div>

                <div className="col-md-6">
                  <h3 className="fw-bold">{item.name}</h3>
                  <p className="text-danger fw-bold fs-5">₹ {item.price}</p>
                  <p className="text-muted">{item.desc}</p>
                  <div className="d-flex align-items-center gap-3">
                    <button
                      className="btn btn-warning fw-bold"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="fw-bold fs-5">{item.quantity}</span>
                    <button
                      className="btn btn-success fw-bold"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +
                    </button>
                    <span className="text-muted ms-3">
                      Subtotal: ₹ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="col-md-3 text-end">
                  <button
                    className="btn btn-danger px-3 py-2 rounded-3"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* PRICING SECTION */}
          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <div className="card p-4 shadow-lg rounded-4 bg-light">
                <h3 className="fw-bold text-dark mb-3">💰 Price Summary</h3>

                <div className="mb-3 pb-3 border-bottom">
                  <p className="d-flex justify-content-between">
                    <strong>Subtotal:</strong> ₹ {totalPrice.toFixed(2)}
                  </p>
                </div>

                {/* DISCOUNT BUTTONS */}
                <h5 className="fw-bold mb-2">Discount Options:</h5>
                <div className="d-flex gap-2 mb-3 flex-wrap">
                  {[10, 20, 30].map((d) => (
                    <button
                      key={d}
                      className={`btn btn-sm px-3 fw-bold ${
                        buttonDiscount === d ? "btn-success" : "btn-outline-success"
                      }`}
                      onClick={() => {
                        setButtonDiscount(d);
                        setCouponDiscount(0);
                        setCoupon("");
                        setCouponMessage("");
                      }}
                    >
                      {d}% OFF
                    </button>
                  ))}
                </div>

                {/* COUPON CODE */}
                <h5 className="fw-bold mb-2">Apply Coupon:</h5>
                <div className="d-flex gap-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g., SAVE30"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                  <button
                    className="btn btn-primary fw-bold"
                    onClick={applyCoupon}
                  >
                    Apply
                  </button>
                </div>
                {couponMessage && (
                  <p
                    className={`fw-bold text-sm ${
                      couponMessage.includes("✅")
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    {couponMessage}
                  </p>
                )}

                {/* SAVINGS */}
                {buttonDiscount > 0 && (
                  <p className="text-success fw-bold">
                    Discount Savings: ₹ {buttonSaving.toFixed(2)}
                  </p>
                )}
                {couponDiscount > 0 && (
                  <p className="text-success fw-bold">
                    Coupon Savings: ₹ {couponSaving.toFixed(2)}
                  </p>
                )}

                <div className="border-top pt-3 my-3">
                  <p className="d-flex justify-content-between mb-2">
                    <strong>Price after Discount:</strong>
                    <span className="text-primary">
                      ₹ {priceAfterDiscount.toFixed(2)}
                    </span>
                  </p>
                  <p className="d-flex justify-content-between mb-2">
                    <strong>GST (18%):</strong>
                    <span className="text-info">₹ {gstAmount.toFixed(2)}</span>
                  </p>
                </div>

                <div className="bg-primary text-white p-3 rounded-3 text-center mb-3">
                  <h4 className="fw-bold mb-0">
                    Total: ₹ {netAmount.toFixed(2)}
                  </h4>
                </div>

                <button
                  className="btn btn-success w-100 fw-bold fs-5 py-2 rounded-3"
                  onClick={() => navigate("/checkout")}
                >
                  ✅ Proceed to Checkout
                </button>

                <button
                  className="btn btn-outline-secondary w-100 mt-2 fw-bold"
                  onClick={() => navigate("/veg")}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
