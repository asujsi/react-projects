import React, { useContext } from "react";
import CartIcon from "../cart/CartIcon";
import CartContent from "../../store/cart-content";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContent);
  const numberOfCartItems = cartCtx.items.length;
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
