import React, { useEffect, useState } from "react";
import axios from "axios"; // Use axios for API calls
import "../styles/products.css"; // Ensure this exists

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://127.0.0.1:5000/products/")
      .then((response) => {
        setProducts(response.data);
        setError(null); // Clear errors if successful
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again.");
      });
  };

  return (
    <div className="container">
      <h2>Available Products</h2>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">Ksh {product.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
