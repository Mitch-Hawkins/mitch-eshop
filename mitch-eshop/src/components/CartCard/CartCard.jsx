import React, { useEffect } from "react";

const CartCard = ({
  id,
  name,
  variant,
  price,
  quantity,
  image,
  cartData,
  setCartData,
}) => {
  const handleRemoveFromCart = () => {
    let indexOfItemToBeRemoved = cartData.findIndex(
      (item) => item.id == id && item.variant == variant
    );
    let tmp = [...cartData];
    tmp.splice(indexOfItemToBeRemoved, 1);
    setCartData(tmp);
    localStorage.setItem("cartItems", JSON.stringify(tmp));
  };

  //   useEffect(() => {
  //     console.log("Whats up");
  //   }, [cartData]);

  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <h4>{variant}</h4>
      <p>Quantity: {quantity}</p>
      <p>Price: ${quantity * price}.00 AUD</p>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
};

export default CartCard;
