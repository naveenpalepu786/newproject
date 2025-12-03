
import { Link } from "react-router-dom";
import "./home.css"; // custom css
import "bootstrap/dist/css/bootstrap.min.css";


function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <header className="hero-section text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to Food Paradise</h1>
          <p className="lead mt-3">
            Fresh • Tasty • Healthy — Explore Veg, Non-Veg & Milk Products
          </p>
          <Link to="/veg" className="btn btn-light btn-lg mt-3 hero-btn">Explore Now</Link>
        </div>
      </header>

      {/* CATEGORY SECTION */}
      <section className="container py-5">
        <h2 className="text-center mb-5 section-title">Our Categories</h2>

        <div className="row g-4">
          
          {/* VEG */}
          <div className="col-md-4">
            <div className="cat-card shadow">
              <img
                src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg"
                className="cat-img"
                alt="Veg Items"
              />
              <div className="p-3 text-center">
                <h4 className="fw-bold">Veg Items</h4>
                <p>Fresh vegetables, organic food, healthy recipes.</p>
                <Link to="/veg" className="btn btn-success w-100">View Veg Menu</Link>
              </div>
            </div>
          </div>

          {/* NON VEG */}
          <div className="col-md-4">
            <div className="cat-card shadow">
              <img
                src="https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg"
                className="cat-img"
                alt="Non Veg Items"
              />
              <div className="p-3 text-center">
                <h4 className="fw-bold">Non-Veg Items</h4>
                <p>Delicious biryani, chicken, fish & more.</p>
                <Link to="/nonveg" className="btn btn-danger w-100">View Non-Veg Menu</Link>
              </div>
            </div>
          </div>

          {/* MILK */}
          <div className="col-md-4">
            <div className="cat-card shadow">
              <img
                src="https://media.istockphoto.com/id/910881428/photo/dairy-products-shot-on-rustic-wooden-table.jpg?b=1&s=612x612&w=0&k=20&c=kv9D6bdGF3mQz24nxRkc1ADkc0VigdW24yOFvYXLnpA="
                className="cat-img"
                alt="Milk Items"
              />
              <div className="p-3 text-center">
                <h4 className="fw-bold">Milk Products</h4>
                <p>Fresh milk, curd, paneer, ghee & more.</p>
                <Link to="/milk" className="btn btn-primary w-100">View Milk Products</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
