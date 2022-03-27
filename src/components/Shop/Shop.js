import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import "./Shop.css";
import { getCart, addToDb, removeFromDb } from "../../utilities/fakedb";

const Shop = () => {
  // FETCHING THE MEALS

  const [meals, setMeals] = useState([]);
  // SETTING CART
  const [cart, setCart] = useState([]);
  // console.log(cart);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  // Getting saved Meals from the local storage

  useEffect(() => {
    let savedItems = [];
    const savedMeals = getCart();
    // console.log(savedMeals);

    for (const id in savedMeals) {
      // console.log(id, savedMeals[id]);
      const savedItem = meals.find((meal) => meal.idMeal === id);
      if (savedItem) {
        let quantity = savedMeals[id];
        savedItem["quantity"] = quantity;
        savedItems.push(savedItem);
      }
    }
    setCart(savedItems);
  }, [meals]);

  // HANDLE ADD TO CART BTN

  const addToCart = (selectedMeal) => {
    if (cart.length < 4) {
      let newCart = [];
      const exists = cart.find((meal) => meal.idMeal === selectedMeal.idMeal);
      if (exists) {
        exists.quantity = exists.quantity + 1;
        const rest = cart.filter((meal) => meal.idMeal !== exists.idMeal);
        newCart = [...rest, exists];
        // console.log("matched", exists);
      } else {
        selectedMeal["quantity"] = 1;
        newCart = [...cart, selectedMeal];
      }
      addToDb(selectedMeal.idMeal);
      setCart(newCart);
      // console.log("not matched", selectedMeal);
    } else {
      alert("Slow down turbo, four items at a time!");
    }
  };
  // Delete item from ADDED meals
  const deleteItem = (id) => {
    // console.log(id, item);
    console.log(cart);
    const restItems = cart.filter((item) => item.idMeal !== id);
    setCart([...restItems]);
    removeFromDb(id);
  };

  return (
    <div className="shopContainer">
      {/* Meals Container */}

      <div className="mealsContainer">
        {meals.map((meal) => (
          <Meal addToCart={addToCart} key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
      {/* Meal cart Container */}
      <div className="mealCart">
        <Cart deleteItem={deleteItem} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
