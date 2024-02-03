import React from "react";
import CartCard from "../../components/CartCard/CartCard";

const CartContainer = ({ cartData, setCartData }) => {
  return (
    <div>
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
            />
          );
        })}
      {cartData && (
        <h1>
          {" "}
          Total Price:
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
