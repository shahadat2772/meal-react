import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <p>Meal React</p>
      <div className="navItems">
        <a href="">Shop</a>
        <a href="">Order</a>
        <a href="">About</a>
      </div>
    </nav>
  );
};

export default Header;
