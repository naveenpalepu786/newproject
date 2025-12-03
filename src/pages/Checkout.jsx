import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "credit-card",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlaceOrder = () => {
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
      alert("Please fill all required fields!");
      return;
    }

    // Generate order ID
    const newOrderId = `ORD-${Date.now()}`;
    setOrderId(newOrderId);

    // Save to localStorage for order history
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
      id: newOrderId,
      date: new Date().toLocaleDateString(),
      items: cartItems,
      total: totalPrice,
      status: "Confirmed",
      customer: formData,
    });
    localStorage.setItem("orders", JSON.stringify(orders));

    setOrderPlaced(true);
    dispatch(clearCart());

    // Redirect after 3 seconds
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-success" role="alert">
          <h2 className="fw-bold text-success">✅ Order Placed Successfully!</h2>
          <p className="fs-5 mt-3">Order ID: <strong>{orderId}</strong></p>
          <p>Your order has been confirmed and will be delivered soon.</p>
          <p className="text-muted">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="container mt-5 text-center">
        <h2>Your cart is empty!</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/veg")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-4">
      <h1 className="text-center text-primary fw-bold mb-4">🛍️ Checkout</h1>

      {/* STEP INDICATOR */}
      <div className="row mb-4">
        <div className="col-md-12">
          <div className="d-flex justify-content-between">
            {[1, 2, 3].map((s) => (
              <div key={s} className="text-center flex-grow-1">
                <div
                  className={`rounded-circle d-inline-flex align-items-center justify-content-center mb-2 ${
                    step >= s ? "bg-primary text-white" : "bg-light text-muted"
                  }`}
                  style={{ width: "50px", height: "50px" }}
                >
                  {s}
                </div>
                <p className="fw-bold">
                  {s === 1 ? "Cart" : s === 2 ? "Shipping" : "Payment"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row">
        {/* FORM SECTION */}
        <div className="col-md-8">
          {step === 1 && (
            <div className="card p-4 shadow-lg">
              <h3 className="fw-bold mb-3">📦 Order Summary</h3>
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between pb-3 border-bottom">
                  <div>
                    <p className="fw-bold">{item.name}</p>
                    <p className="text-muted">Qty: {item.quantity}</p>
                  </div>
                  <p className="fw-bold">₹ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="d-flex justify-content-between mt-3">
                <h4>Total:</h4>
                <h4 className="text-primary">₹ {totalPrice.toFixed(2)}</h4>
              </div>
              <button
                className="btn btn-primary w-100 mt-4"
                onClick={() => setStep(2)}
              >
                Continue to Shipping
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="card p-4 shadow-lg">
              <h3 className="fw-bold mb-3">📍 Shipping Address</h3>
              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Phone *</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Address *</label>
                  <textarea
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="123 Main Street, Apt 4B"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">City *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Zip Code *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                    />
                  </div>
                </div>

                <div className="d-flex gap-2 mt-4">
                  <button
                    type="button"
                    className="btn btn-secondary flex-grow-1"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary flex-grow-1"
                    onClick={() => setStep(3)}
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="card p-4 shadow-lg">
              <h3 className="fw-bold mb-3">💳 Payment Method</h3>
              <div className="mb-3">
                <label className="form-check-label fw-bold d-block p-3 border rounded mb-2">
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    name="payment"
                    value="credit-card"
                    checked={formData.paymentMethod === "credit-card"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                  />
                  💳 Credit/Debit Card
                </label>
                <label className="form-check-label fw-bold d-block p-3 border rounded mb-2">
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    name="payment"
                    value="paypal"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                  />
                  🅿️ PayPal
                </label>
                <label className="form-check-label fw-bold d-block p-3 border rounded mb-2">
                  <input
                    type="radio"
                    className="form-check-input me-2"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentMethod: e.target.value })
                    }
                  />
                  🚚 Cash on Delivery
                </label>
              </div>

              <div className="alert alert-info mt-3">
                <p className="mb-0">
                  <strong>Total Amount:</strong> ₹ {totalPrice.toFixed(2)}
                </p>
              </div>

              <div className="d-flex gap-2 mt-4">
                <button
                  className="btn btn-secondary flex-grow-1"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button
                  className="btn btn-success flex-grow-1 fw-bold"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          )}
        </div>

        {/* SUMMARY SECTION */}
        <div className="col-md-4">
          <div className="card p-4 shadow-lg sticky-top" style={{ top: "20px" }}>
            <h4 className="fw-bold mb-3">Order Summary</h4>
            <div className="bg-light p-3 rounded mb-3">
              <p className="mb-2">
                <strong>Subtotal:</strong> ₹ {totalPrice.toFixed(2)}
              </p>
              <p className="mb-2">
                <strong>Shipping:</strong> <span className="text-success">FREE</span>
              </p>
              <p className="mb-0">
                <strong>Tax (18%):</strong> ₹{" "}
                {(totalPrice * 0.18).toFixed(2)}
              </p>
            </div>
            <div className="border-top pt-3">
              <h5 className="text-primary">
                <strong>Total: ₹ {(totalPrice * 1.18).toFixed(2)}</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
