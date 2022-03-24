import React from "react";
import "./CartItem.css";

const CartItem = ({ item, deleteItem }) => {
  // console.log(item);
  const { strMealThumb, strMeal, quantity, idMeal } = item;
  return (
    <div className="itemContainer">
      <img src={strMealThumb} alt="" />
      <p className="itemName">{strMeal}</p>
      <p className="itemQuantity">{quantity}</p>
      <button onClick={() => deleteItem(idMeal, item)} className="itemBtn">
        X
      </button>
    </div>
  );
};

export default CartItem;
