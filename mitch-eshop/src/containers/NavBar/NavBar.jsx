import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* Header */}
      <NavLink to="/">Home</NavLink>
      {/* Search Bar */}
      {/* Home Link */}
      <NavLink to="/favourites">Favourites</NavLink>
      {/* Favourites Link */}
      {/* Cart Link */}
    </nav>
  );
};

export default NavBar;
