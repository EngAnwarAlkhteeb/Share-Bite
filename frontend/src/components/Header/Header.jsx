import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Make Every Meal Count</h2>
        <p>
          48 millon tons of food wasted every year, <b>waste no more! </b> 
          fight food waste together with <strong>ShareBite. </strong>
        </p>
        {/* <button>View Menu</button> */}
      </div>
    </div>
  );
};

export default Header;
