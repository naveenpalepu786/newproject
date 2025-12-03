import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center text-primary fw-bold mb-4" style={{ fontSize: "48px" }}>
        🍽️ About FoodHub
      </h1>

      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <img
            src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg"
            alt="Restaurant"
            className="img-fluid rounded-4 shadow-lg"
            style={{ height: "350px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold text-gradient mb-3">Welcome to Our Food Paradise 🎉</h2>
          <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.8" }}>
            We bring you the best taste from around the world—fresh, flavorful, and cooked
            with love. Whether it's spicy Non-Veg, healthy Veg meals, or fresh Milk products,
            we serve everything with premium quality and hygiene.
          </p>

          <h4 className="fw-bold text-info mt-4 mb-3">🍛 What We Serve</h4>
          <ul className="list-unstyled">
            <li className="mb-2">
              <strong>✅ Fresh Veg Dishes:</strong> Healthy & delicious vegetarian options
            </li>
            <li className="mb-2">
              <strong>✅ Premium Non-Veg:</strong> Succulent chicken, mutton & seafood specials
            </li>
            <li className="mb-2">
              <strong>✅ Pure Milk Products:</strong> Farm-fresh milk, curd, paneer & more
            </li>
            <li className="mb-2">
              <strong>✅ Fast Delivery:</strong> Quick, hygienic & reliable service
            </li>
          </ul>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card p-4 shadow-lg h-100 text-center">
            <h3 className="text-primary fw-bold mb-3">🎯 Our Mission</h3>
            <p className="text-muted">
              To offer high-quality food at affordable prices while maintaining hygiene, purity,
              and unbeatable taste in every dish we serve.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow-lg h-100 text-center">
            <h3 className="text-success fw-bold mb-3">🌟 Our Vision</h3>
            <p className="text-muted">
              To become your trusted food delivery partner by consistently delivering fresh,
              delicious, and healthy meals to your doorstep.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow-lg h-100 text-center">
            <h3 className="text-warning fw-bold mb-3">💖 Our Values</h3>
            <p className="text-muted">
              Quality, Hygiene, Speed & Customer Satisfaction are our core values. Your happiness
              is our top priority.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <h3 className="fw-bold text-primary mb-3">📊 Why Choose FoodHub?</h3>
          <div className="list-group">
            <button type="button" className="list-group-item list-group-item-action">
              <strong>100% Fresh & Hygienic</strong> - All items are sourced from trusted suppliers
            </button>
            <button type="button" className="list-group-item list-group-item-action">
              <strong>Best Prices</strong> - Competitive pricing with regular discounts
            </button>
            <button type="button" className="list-group-item list-group-item-action">
              <strong>Fast Delivery</strong> - Quick & reliable delivery to your location
            </button>
            <button type="button" className="list-group-item list-group-item-action">
              <strong>Wide Selection</strong> - Veg, Non-Veg & Dairy products all in one place
            </button>
            <button type="button" className="list-group-item list-group-item-action">
              <strong>Easy Ordering</strong> - Simple, intuitive app for seamless shopping
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <h3 className="fw-bold text-primary mb-3">📞 Contact Us</h3>
          <div className="card p-4 shadow-lg">
            <p className="mb-3">
              <strong>📍 Address:</strong> FoodHub Headquarters, Hyderabad City in Telangana , India
            </p>
            <p className="mb-3">
              <strong>📧 Email:</strong> support@foodhub.com
            </p>
            <p className="mb-3">
              <strong>📱 Phone:</strong> +91 9876543210
            </p>
            <p className="mb-3">
              <strong>⏰ Hours:</strong> 10:00 AM - 11:00 PM (Every Day)
            </p>
            <hr />
            <p className="text-muted">
              Have a question? We're here to help! Reach out to our customer support team.
            </p>
          </div>
        </div>
      </div>

      <div className="alert alert-success text-center py-4 rounded-4 shadow-lg">
        <h3 className="fw-bold mb-2">Thank You for Your Trust 💖</h3>
        <p className="mb-0">Your satisfaction is our greatest achievement. Happy eating!</p>
      </div>
    </div>
  );
}

export default AboutUs;
