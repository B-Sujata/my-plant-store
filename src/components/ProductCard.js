import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./ProductCard.css"; // We'll create this next

function ProductCard({ plant }) {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Dispatch the addItemToCart action with the plant as payload
    dispatch(
      cartActions.addItemToCart({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        thumbnail: plant.thumbnail,
      })
    );
    // Disable the button
    setIsAdded(true);
  };

  return (
    <div className="product-card">
      <img src={plant.thumbnail} alt={plant.name} className="product-image" />
      <div className="product-info">
        <h3>{plant.name}</h3>
        <p>${plant.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className="add-to-cart-btn"
        >
          {isAdded ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
