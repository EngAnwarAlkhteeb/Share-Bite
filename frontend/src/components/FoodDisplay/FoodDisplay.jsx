import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  const isEmpty = food_list === undefined || food_list.length == 0;
  const [showAll, setShowAll] = useState(false);
  const showing_food_list = showAll ? food_list : food_list.slice(0, 10);

  return (
    <div className="food-display">
      {/* id="food-display" */}
      <h2>Top Dishes Near You</h2>
      <div className="display-food-list">
        {isEmpty ?
          "No food Available" :
          showing_food_list.map((item, index) => {

            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }

          })
        }
      </div>
      <div className="button-showing">
        <button className="button" type="button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}

export default FoodDisplay;
