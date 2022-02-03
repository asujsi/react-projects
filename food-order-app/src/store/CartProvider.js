import React from "react";
import CartContent from "./cart-content";

function CartProvider(props) {
  const addItemToCartHandler = (item) => {};
  const removeItemToCartHandler = (id) => {};
  const CartContent = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return <CartContent.Provider>{props.children}</CartContent.Provider>;
}

export default CartProvider;
