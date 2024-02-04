import React, { useEffect } from "react";
import styles from "./CartCard.module.scss";

const CartCard = ({
  id,
  name,
  variant,
  price,
  quantity,
  image,
  cartData,
  setCartData,
  maxQuantity,
}) => {
  const handleRemoveFromCart = () => {
    console.log("ByeBYe");
    let indexOfItemToBeRemoved = cartData.findIndex(
      (item) => item.id == id && item.variant == variant
    );
    let tmp = [...cartData];
    tmp.splice(indexOfItemToBeRemoved, 1);
    setCartData(tmp);
    localStorage.setItem("cartItems", JSON.stringify(tmp));
  };

  const handleIncrement = () => {
    let indexOfItemToBeIncremented = cartData.findIndex(
      (item) => item.id == id && item.variant == variant
    );
    let tmp = [...cartData];
    if (tmp[indexOfItemToBeIncremented].quantity + 1 > maxQuantity) {
      return;
    } else {
      tmp[indexOfItemToBeIncremented].quantity++;
      setCartData(tmp);
      localStorage.setItem("cartItems", JSON.stringify(tmp));
    }
  };

  const handleDecrement = () => {
    let indexOfItemToBeDecremented = cartData.findIndex(
      (item) => item.id == id && item.variant == variant
    );
    let tmp = [...cartData];
    tmp[indexOfItemToBeDecremented].quantity--;
    if (tmp[indexOfItemToBeDecremented].quantity == 0) {
      handleRemoveFromCart();
    } else {
      setCartData(tmp);
      localStorage.setItem("cartItems", JSON.stringify(tmp));
    }
  };

  return (
    <div className={styles.container}>
      <img src={image} className={styles.pedalImage} />
      <div className={styles.infoContainer}>
        <div className={styles.nameContainer}>
          <h3>{name}</h3>
          <h4>{variant}</h4>
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.quantityContainer}>
            <button onClick={handleIncrement}>+</button>
            <p>Quantity: {quantity}</p>
            <button onClick={handleDecrement}>-</button>
          </div>
          <p>Price: ${quantity * price}.00 AUD</p>
        </div>
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartCard;
