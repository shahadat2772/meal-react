import React from "react";
import CartItem from "../CartIems/CartItem";
import "./Cart.css";

const Cart = ({ cart, deleteItem }) => {
  // console.log(cart, deleteItem);

  return (
    <div className="cart">
      <p
        style={{
          color: "gray",
          textAlign: "center",
          fontSize: "25px",
          margin: "25px 0px 10px 0px",
        }}
      >
        Added Meals
      </p>

      {cart.map((item) => (
        <CartItem
          deleteItem={deleteItem}
          key={item.idMeal}
          item={item}
        ></CartItem>
      ))}
    </div>
  );
};

export default Cart;
