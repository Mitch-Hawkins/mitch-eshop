import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      {/* Header */}
      <NavLink to="/">Home</NavLink>
      {/* Search Bar */}
      {/* Home Link */}
      <NavLink to="/favourites">Favourites</NavLink>
      {/* Favourites Link */}
      <NavLink to="/cart">Cart</NavLink>
      {/* Cart Link */}
    </nav>
  );
};

export default NavBar;
