import React, { useEffect } from "react";
import CartContainer from "../../containers/CartContainer/CartContainer";
import styles from "./CartPage.module.scss";

const CartPage = ({ cartData, setCartData }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Shopping Cart</h1>
      <CartContainer cartData={cartData} setCartData={setCartData} />
      <button className={styles.checkoutButton}>Checkout</button>
    </div>
  );
};

export default CartPage;
