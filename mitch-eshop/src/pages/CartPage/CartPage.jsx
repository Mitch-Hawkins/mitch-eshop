import React, { useEffect } from "react";
import CartContainer from "../../containers/CartContainer/CartContainer";

const CartPage = ({ cartData, setCartData }) => {
  return (
    <div>
      <CartContainer cartData={cartData} setCartData={setCartData} />
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;
