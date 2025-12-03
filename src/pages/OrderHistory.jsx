import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary fw-bold mb-4">📋 Order History</h1>

      {orders.length === 0 ? (
        <div className="alert alert-info text-center">
          <p>No orders yet. Start shopping now!</p>
        </div>
      ) : (
        <div className="row">
          {orders.map((order) => (
            <div key={order.id} className="col-md-6 mb-4">
              <div className="card shadow-lg">
                <div className="card-header bg-primary text-white">
                  <h5 className="card-title mb-0">{order.id}</h5>
                  <small>{order.date}</small>
                </div>
                <div className="card-body">
                  <p className="mb-2">
                    <strong>Customer:</strong> {order.customer.fullName}
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> {order.customer.email}
                  </p>
                  <p className="mb-3">
                    <strong>Status:</strong>{" "}
                    <span className="badge bg-success">{order.status}</span>
                  </p>

                  <h6 className="fw-bold mb-2">Items:</h6>
                  <ul className="list-unstyled">
                    {order.items.map((item) => (
                      <li key={item.id} className="text-muted">
                        {item.name} x{item.quantity} - ₹
                        {(item.price * item.quantity).toFixed(2)}
                      </li>
                    ))}
                  </ul>

                  <div className="border-top pt-3 mt-3">
                    <p className="mb-0">
                      <strong>Total Amount:</strong>{" "}
                      <span className="text-success fs-5">₹ {order.total.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderHistory;
