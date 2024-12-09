import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { getId } from "../Navbar/navLinks";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id={getId("menu")}>
      {/* id="explore-menu" */}
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">
        Reduce food waste, one bite at a time.
        <strong> ShareBite</strong> connects individuals and businesses <br />to donate surplus food to those in need.
        <br />Join the movement and positively impact the environment and your community.

      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
