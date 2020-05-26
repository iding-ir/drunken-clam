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

          const { name, tagline, image_url } = item;

          const backgroundImage = `url("${image_url}")`;

          return (
            <div className="item" key={index}>
              <div className="image" style={{ backgroundImage }}></div>

              <div className="name">
                <h5>{name}</h5>
                <h6>{tagline}</h6>
              </div>

              <div className="controls">
                <div className="add" onClick={() => addToCart(item)}>
                  +
                </div>

                <div className="count"> {count}</div>

                <div className="remove" onClick={() => removeFromCart(item)}>
                  -
                </div>
              </div>
            </div>
          );
        })}
      </Swipeable>
    </div>
  );
};

export default Cart;
