import React from "react";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./CartContainer.module.scss";

const CartContainer = ({ cartData, setCartData }) => {
  return (
    <div className={styles.container}>
      {cartData == "" && (
        <p className={styles.gridLine}>
          You have no items in your cart! Better get shopping!
        </p>
      )}
      {cartData &&
        cartData.map((item) => {
          //need to add image link to cart
          return (
            <CartCard
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              variant={item.variant}
              image={item.image}
              cartData={cartData}
              setCartData={setCartData}
              id={item.id}
              maxQuantity={item.maxQuantity}
            />
          );
        })}
      {cartData && (
        <h1>
          {" "}
          Total Price:{" $"}
          {cartData.reduce((acc, item) => {
            return (acc += item.price * item.quantity);
          }, 0)}
          .00 AUD
        </h1>
      )}
    </div>
  );
};

export default CartContainer;
