import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.container}>
      <h1 onClick={() => navigate("/")}>Pedal Planet</h1>
      {/* Header */}
      <NavLink
        to="/"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "basic",
            isActive ? "active" : "basic",
            isTransitioning ? "transitioning" : "basic",
          ].join(" ")
        }
      >
        Home
      </NavLink>
      {/* Search Bar */}
      {/* Home Link */}
      <NavLink
        to="/favourites"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "basic",
            isActive ? "active" : "basic",
            isTransitioning ? "transitioning" : "basic",
          ].join(" ")
        }
      >
        Favourites
      </NavLink>
      {/* Favourites Link */}
      <NavLink
        to="/cart"
        className={({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "basic",
            isActive ? "active" : "basic",
            isTransitioning ? "transitioning" : "basic",
          ].join(" ")
        }
      >
        Cart
      </NavLink>
      {/* Cart Link */}
    </nav>
  );
};

export default NavBar;
