import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";

function Header() {
  // Get the totalQuantity from the Redux cart state
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <nav className="nav">
        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        {/* Shopping Cart Icon & Item Count */}
        <div className="cart-icon">
          <Link to="/cart">
            <FaShoppingCart />
            <span className="cart-count">{totalQuantity}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
