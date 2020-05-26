import React from "react";
import { Swipeable } from "react-swipeable";

import "./cart.scss";

const Cart = (props) => {
  const { openCart, closeCart } = props;

  return (
    <div className="cart">
      <Swipeable
        onSwipedUp={() => {
          openCart();
        }}
        onSwipedDown={() => {
          closeCart();
        }}
      ></Swipeable>
    </div>
  );
};

export default Cart;
