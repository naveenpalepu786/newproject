# 🍔 FoodHub - Food Delivery Application

A modern, real-world food delivery application built with React, Redux, and Bootstrap. This project demonstrates professional-level development practices with advanced features like filtering, sorting, checkout, and order management.

## 🌟 Features

### Core Features
- ✅ **Product Catalog**: Browse Veg, Non-Veg, and Milk products
- ✅ **Smart Search & Filtering**: Search by name, filter by price range
- ✅ **Sorting Options**: Sort by price, rating, or name
- ✅ **Shopping Cart**: Add/remove items, adjust quantities
- ✅ **Discount System**: Apply percentage discounts and coupon codes
- ✅ **Multi-step Checkout**: Professional checkout process with shipping details
- ✅ **Order History**: Track all previous orders
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### Technical Features
- Redux state management for cart
- Client-side pagination
- Local storage for order persistence
- Bootstrap 5 for UI components
- React Router for navigation
- Modern CSS with gradients and animations

## 📁 Project Structure

```
src/
├── components/
│   ├── FilterBar.jsx         # Search & filter component
│   ├── ProductCard.jsx       # Reusable product card
│   └── [other components]
├── pages/
│   ├── Checkout.jsx          # Multi-step checkout
│   ├── OrderHistory.jsx      # Order tracking
│   └── [other pages]
├── data/
│   ├── vegProducts.json      # Veg products data
│   ├── nonvegProducts.json   # Non-veg products data
│   └── milkProducts.json     # Milk products data
├── App.jsx                   # Main app component
├── App.css                   # Global styles
├── cartSlice.js              # Redux cart logic
├── store.js                  # Redux store config
├── veg.jsx                   # Veg page
├── nonveg.jsx                # Non-veg page
├── milk.jsx                  # Milk page
├── home.jsx                  # Home page
├── aboutus.jsx               # About us page
└── cart.jsx                  # Cart page
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd newproject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Key Features Explained

### 1. **Search & Filter System**
- Real-time search by product name or description
- Price range filtering
- Multiple sorting options (price, rating, name)

```jsx
const [filters, setFilters] = useState({
  searchTerm: "",
  sortBy: "default",
  minPrice: 0,
  maxPrice: 500,
});
```

### 2. **Redux Cart Management**
The cart state includes:
- `cartItems`: Array of items in cart
- `totalPrice`: Calculated total
- `totalItems`: Count of items

```javascript
// Actions available:
- addToCart(item)
- removeFromCart(id)
- decreaseQuantity(id)
- clearCart()
- updateQuantity({id, quantity})
```

### 3. **Multi-Step Checkout**
- Step 1: Review cart items
- Step 2: Enter shipping details
- Step 3: Select payment method

Orders are saved to localStorage for persistence.

### 4. **Discount System**
- Quick discount buttons (10%, 20%, 30%)
- Coupon code system with validation
- Valid coupons: `SAVE30`, `SAVE40`, `SAVE10`, `WELCOME20`, `FIRST50`
- Automatic GST calculation (18%)

### 5. **Responsive Navigation**
Modern navbar with:
- Product categories
- Cart badge with item count
- Order history link
- Hamburger menu for mobile

## 💾 Data Management

### Product Structure
```json
{
  "id": 1,
  "name": "Product Name",
  "img": "image-url",
  "desc": "Description",
  "price": 100,
  "rating": 4.5,
  "time": "Delivery time",
  "category": "veg|nonveg|milk"
}
```

### Order Structure (Stored in localStorage)
```json
{
  "id": "ORD-1234567890",
  "date": "12/2/2024",
  "items": [...],
  "total": 500,
  "status": "Confirmed",
  "customer": {
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "address": "123 Main St"
  }
}
```

## 🎨 Styling

The project uses:
- **Bootstrap 5** for components
- **CSS Gradients** for modern look
- **Flexbox** for responsive layouts
- **Animations** for smooth interactions
- **Color Scheme**: Purple & Blue gradients

### Key Colors
- Primary: `#667eea` (Purple Blue)
- Secondary: `#764ba2` (Purple)
- Success: `#84fab0` (Green)
- Warning: `#ff6600` (Orange)

## 📊 Redux State Tree

```
store
├── cart
│   ├── cartItems []
│   ├── totalPrice: 0
│   └── totalItems: 0
```

## 🔄 User Flow

```
Home → Browse Products → Add to Cart → 
View Cart → Apply Discount → Checkout → 
Enter Address → Select Payment → Order Confirmed → 
Order History
```

## 💡 Advanced Features Used

1. **useMemo Hook**: Optimized filtering and sorting
2. **useNavigate Hook**: Programmatic routing
3. **useDispatch Hook**: Redux actions
4. **useSelector Hook**: Redux state access
5. **LocalStorage API**: Order persistence
6. **Pagination**: Display products in pages

## 📱 Responsive Breakpoints

- Mobile: < 576px
- Tablet: 576px - 768px
- Desktop: > 768px

## 🔒 Security Considerations

- All data is validated before submission
- Orders stored in browser localStorage (client-side only)
- No backend server (for demo purposes)

## 🧪 Testing Coupon Codes

Try these coupon codes for discounts:
- `SAVE30` → 50% OFF
- `SAVE40` → 30% OFF
- `SAVE10` → 10% OFF
- `WELCOME20` → 20% OFF
- `FIRST50` → 50% OFF

## 🚀 Performance Optimizations

- React.useMemo for expensive calculations
- Pagination to limit rendered items
- CSS animations instead of JS
- Lazy loading images
- Bootstrap CDN for faster loading

## 📦 Dependencies

```json
{
  "@reduxjs/toolkit": "^2.10.1",
  "bootstrap": "^5.3.8",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-redux": "^9.2.0",
  "react-router-dom": "^7.9.6"
}
```

## 🤝 Contributing

Feel free to fork and enhance this project!

## 📄 License

MIT License - Feel free to use for personal and commercial projects.

## 👨‍💻 Author

Created with ❤️ for food lovers and developers

---

## 🎓 Learning Outcomes

This project demonstrates:
- React hooks (useState, useContext, useMemo, useReducer)
- Redux Toolkit for state management
- React Router for navigation
- Bootstrap for responsive design
- Professional code structure
- Real-world e-commerce patterns
- Client-side data persistence
- Form handling and validation

Enjoy building! 🚀
