import React, { useContext } from "react";
import "./AddFoods.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

function AddFoods() {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  console.log(url)
  const rows = []
  // const navigate = useNavigate();
  return (
    <div>
      <form action={url + "api/food/add-multiple"} method="post">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>description</th>
              <th>price</th>
              <th>image</th>
              <th>del</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="number" /></td>
              <td><input type="file" /></td>
              <td><button type="button">x</button></td>
            </tr>
          </tbody>
        </table>
        <input type="text" />
      </form>
    </div>
  );
}
export default AddFoods;
