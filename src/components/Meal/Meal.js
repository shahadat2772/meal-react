import React from "react";
import "./Meal.css";

const Meal = ({ meal, addToCart }) => {
  const { strMeal, strMealThumb } = meal;
  return (
    <div className="mealCard">
      <img src={strMealThumb} alt="" />
      <div className="cardInfo">
        <p style={{ fontSize: "28px", margin: "0px 0px 0px 0px" }}>{strMeal}</p>
        <button onClick={() => addToCart(meal)} className="addBtn">
          Add
        </button>
      </div>
    </div>
  );
};

export default Meal;
