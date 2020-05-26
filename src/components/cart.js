import React from "react";
import { Swipeable } from "react-swipeable";
import * as classnames from "classnames";

import "./cart.scss";

const Cart = (props) => {
  const { cart, openCart, closeCart, addToCart, removeFromCart } = props;

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

          const { id, name } = item;
          console.log(id);

          return (
            <div key={index}>
              {name} x {count}(<span onClick={() => addToCart(item)}>Add</span>|
              <span onClick={() => removeFromCart(item)}>Remove</span>)
            </div>
          );
        })}
      </Swipeable>
    </div>
  );
};

export default Cart;
