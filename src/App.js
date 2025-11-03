import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ProductListingPage from "./pages/ProductListingPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

// This Layout component ensures the Header is shown
// on the product and cart pages, but NOT on the landing page.
function MainLayout() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet /> {/* This will render the nested route's component */}
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Route 1: Landing Page (no header) */}
      <Route path="/" element={<LandingPage />} />

      {/* Routes 2 & 3: Pages with the Header */}
      <Route element={<MainLayout />}>
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Route>
    </Routes>
  );
}

export default App;
