import React from "react";
import { PLANT_DATA } from "../products"; // Import your plant data
import ProductCard from "../components/ProductCard"; // Import your new component
import "./ProductListingPage.css"; // We'll create this next

function ProductListingPage() {
  return (
    <div className="product-listing">
      {PLANT_DATA.map((category) => (
        <section key={category.category} className="category-section">
          {/* This is the category title (Rubric Point 1) */}
          <h2>{category.category}</h2>

          {/* This is the grid of product cards (Rubric Point 2 & 3) */}
          <div className="product-grid">
            {category.items.map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductListingPage;
