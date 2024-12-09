import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import navLinks from "./navLinks";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function capitalize(word) {
  let words = word.split(" ");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}


// const Navbar = ({ setShowLogin }) => {

// }

function Navbar({ setShowLogin }) {
  const menues = Object.keys(navLinks);
  const links = Object.values(navLinks);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")

  }



  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        {menues.map((menu, i) => (
          <li
            key={menu}
            onClick={() => setMenu(menu)}
            className={false ? "active" : ""}
          >
            <a href={links[i]}>
              {capitalize(menu)}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
          : <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>

          </div>}

      </div>
    </div>
  );
}
// function Navbar() {
//   const [menu, setMenu] = useState("menu");

//   const menues = ["home", "menu", "mobile app", "contact us"];
//   return (
//     <div className="navbar">
//       <img src={assets.logo} alt="" className="logo" />
//       <ul className="navbar-menu">
//         {menues.map((currentMenu) => (
//           <li
//             key={currentMenu}
//             onClick={() => setMenu(currentMenu)}
//             className={menu === currentMenu ? "active" : ""}
//           >
//             {capitalize(currentMenu)}
//           </li>
//         ))}
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <div className="nabvar-search-icon">
//           <img src={assets.basket_icon} alt="" />
//           <div className="dot"></div>
//         </div>
//         <button>sign in</button>
//       </div>
//     </div>
//   );
// }

export default Navbar;
