# 📚 FoodHub Project Guide

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure Overview

```
newproject/
├── src/
│   ├── components/                  # Reusable React components
│   │   ├── FilterBar.jsx           # Search, sort, price filter
│   │   └── ProductCard.jsx         # Product display card
│   │
│   ├── pages/                      # Page components
│   │   ├── Checkout.jsx            # Multi-step checkout
│   │   └── OrderHistory.jsx        # View past orders
│   │
│   ├── data/                       # Product data files
│   │   ├── vegProducts.json        # 10 vegetarian dishes
│   │   ├── nonvegProducts.json     # 10 non-veg dishes
│   │   └── milkProducts.json       # 15 milk products
│   │
│   ├── App.jsx                     # Main app with routing
│   ├── App.css                     # Global styles
│   ├── main.jsx                    # React DOM entry
│   ├── index.css                   # Base styles
│   │
│   ├── store.js                    # Redux store config
│   ├── cartSlice.js                # Redux cart logic
│   │
│   ├── home.jsx                    # Homepage with categories
│   ├── home.css                    # Home styles
│   ├── veg.jsx                     # Vegetarian products page
│   ├── nonveg.jsx                  # Non-veg products page
│   ├── milk.jsx                    # Milk products page
│   ├── cart.jsx                    # Shopping cart
│   ├── cart.css                    # Cart styles
│   └── aboutus.jsx                 # About us page
│
├── public/                         # Static assets
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint rules
├── index.html                      # HTML entry point
│
├── PROJECT_DOCUMENTATION.md        # Full documentation
├── FEATURES.md                     # Features list
└── README.md                       # This file
```

---

## 🎯 How to Use Each Component

### FilterBar Component
Used on all product pages (veg.jsx, nonveg.jsx, milk.jsx)

```jsx
import FilterBar from "./components/FilterBar";

function MyPage() {
  const handleFilterChange = (filters) => {
    // Apply filters to products
    console.log(filters);
  };

  return (
    <FilterBar onFilterChange={handleFilterChange} />
  );
}
```

**Filter object includes:**
```javascript
{
  searchTerm: "paneer",           // Search query
  sortBy: "price-low",            // Sort option
  minPrice: 100,                  // Min price
  maxPrice: 500                   // Max price
}
```

### ProductCard Component
Reusable card for displaying products

```jsx
import ProductCard from "./components/ProductCard";

function Page() {
  return (
    <ProductCard item={productItem} />
  );
}
```

**Product item structure:**
```javascript
{
  id: 1,
  name: "Paneer Butter Masala",
  img: "url-to-image",
  desc: "Description here",
  price: 180,
  rating: 4.5,
  time: "30 mins",
  category: "veg"
}
```

---

## 🛒 Redux Store Usage

### Import Redux in Components

```jsx
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";

function MyComponent() {
  // Get state
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // Dispatch actions
  const dispatch = useDispatch();
  
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      {/* Use cart state */}
    </div>
  );
}
```

### Available Redux Actions

```javascript
// Add item or increase quantity
dispatch(addToCart(product));

// Remove entire item
dispatch(removeFromCart(productId));

// Decrease quantity by 1
dispatch(decreaseQuantity(productId));

// Clear entire cart
dispatch(clearCart());

// Set exact quantity
dispatch(updateQuantity({ id: productId, quantity: 3 }));
```

### Redux State Structure

```javascript
{
  cart: {
    cartItems: [
      {
        id: 1,
        name: "Product",
        price: 100,
        quantity: 2,
        img: "url",
        desc: "description"
      }
    ],
    totalPrice: 200,
    totalItems: 2
  }
}
```

---

## 🛣️ Routing Structure

```javascript
// App.jsx Routes
<Route path="/home" element={<HOME />} />
<Route path="/veg" element={<Veg />} />
<Route path="/nonveg" element={<NONVEG />} />
<Route path="/milk" element={<MILK />} />
<Route path="/aboutus" element={<ABOUTUS />} />
<Route path="/cart" element={<Cart />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/orders" element={<OrderHistory />} />
<Route path="/" element={<HOME />} />
```

### Navigate Between Pages

```jsx
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/cart")}>
      Go to Cart
    </button>
  );
}
```

---

## 💾 Working with localStorage

### Saving Orders

```javascript
// Automatically saved during checkout
const orders = JSON.parse(localStorage.getItem("orders")) || [];
orders.push(newOrder);
localStorage.setItem("orders", JSON.stringify(orders));
```

### Retrieving Orders

```javascript
const orders = JSON.parse(localStorage.getItem("orders")) || [];
console.log(orders); // Array of all orders
```

### Order Structure

```javascript
{
  id: "ORD-1702540800000",
  date: "12/2/2024",
  items: [...],
  total: 500.50,
  status: "Confirmed",
  customer: {
    fullName: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    address: "123 Main St, Apt 4B",
    city: "Mumbai",
    zipCode: "400001"
  }
}
```

---

## 🎨 Styling Guidelines

### Use Bootstrap Classes

```jsx
<div className="container mt-4 mb-4">
  <div className="row g-4">
    <div className="col-md-6">
      <h2 className="fw-bold text-primary">Title</h2>
      <button className="btn btn-primary">Click</button>
    </div>
  </div>
</div>
```

### Available Colors

```javascript
// Primary colors
bg-primary      // Blue (#667eea)
text-primary    // Blue
btn-primary     // Blue button

// Secondary
bg-success      // Green (#84fab0)
btn-success     // Green button

// Alert colors
bg-danger       // Red
bg-warning      // Orange
bg-info         // Cyan
```

---

## 🔧 Adding New Products

### Step 1: Add to JSON File
Edit `src/data/vegProducts.json`:

```json
{
  "id": 11,
  "name": "New Dish",
  "img": "image-url",
  "desc": "Description",
  "price": 200,
  "rating": 4.6,
  "time": "25 mins",
  "category": "veg"
}
```

### Step 2: Import and Use
Already imported in veg.jsx, nonveg.jsx, milk.jsx

---

## 🐛 Debugging Tips

### Check Redux State
```javascript
// In browser console
store.getState()
```

### View Cart Items
```javascript
const cartItems = useSelector((state) => state.cart.cartItems);
console.log(cartItems);
```

### Check localStorage
```javascript
// In browser console
localStorage.getItem("orders")
```

---

## 📝 Code Examples

### Adding Item to Cart

```jsx
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(addToCart(product))}>
      Add to Cart
    </button>
  );
}
```

### Displaying Cart Count

```jsx
import { useSelector } from "react-redux";

function CartBadge() {
  const cartCount = useSelector(
    (state) => state.cart.totalItems
  );

  return <span className="badge">{cartCount}</span>;
}
```

### Filtering Products

```jsx
const [filters, setFilters] = useState({
  searchTerm: "",
  sortBy: "default",
  minPrice: 0,
  maxPrice: 500,
});

const filtered = products.filter(p => 
  p.price >= filters.minPrice && 
  p.price <= filters.maxPrice &&
  p.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
);
```

---

## 🚀 Performance Tips

1. **Use useMemo for expensive operations**
   ```javascript
   const filtered = useMemo(() => {
     // Expensive filtering logic
     return filtered;
   }, [dependencies]);
   ```

2. **Lazy load images**
   ```jsx
   <img loading="lazy" src="..." />
   ```

3. **Use React.memo for components**
   ```javascript
   export default React.memo(ProductCard);
   ```

---

## 📞 Support

For issues or questions:
- Check PROJECT_DOCUMENTATION.md for detailed info
- Review FEATURES.md for features list
- Check browser console for errors

---

## ✅ Checklist for Customization

- [ ] Update company name in navbar
- [ ] Change color scheme in App.css
- [ ] Add your products to JSON files
- [ ] Update About Us page
- [ ] Customize coupon codes
- [ ] Test on mobile devices
- [ ] Update footer information
- [ ] Change product images

---

**Happy Coding! 🎉**
