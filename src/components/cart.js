import React from "react";
import { Swipeable } from "react-swipeable";
import * as classnames from "classnames";

import "./cart.scss";

const Cart = (props) => {
  const { cart, openCart, closeCart } = props;

  const cartClasses = classnames("cart", {
    open: cart.visible,
  });

  return (
    <div className={cartClasses}>
      <Swipeable
        onSwipedUp={() => {
          openCart();
        }}
        onSwipedDown={() => {
          closeCart();
        }}
      >
        {Object.values(cart.items).map((it, index) => {
          const { item, count } = it;

          const { name } = item;

          return (
            <div key={index}>
              {name} x {count}
            </div>
          );
        })}
      </Swipeable>
    </div>
  );
};

export default Cart;
