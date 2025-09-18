import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "./logo.png";
// import './main_page.css';

export default function NavBar() {
  return (
    <div className="main">
      <div className="header">
        <img src={logo} alt="Grocery Shop Logo" className="img1" />
        <ul className="unorder_list">
          <li>
            {/* We have to write css file in to "" */}
            <NavLink to="/main_page" className={({ isActive }) => isActive ? "active" : undefined}>
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/vegetables" className={({ isActive }) => isActive ? "active" : undefined}>
              <i className="fa-solid fa-shop"></i> Vegetables
            </NavLink>
          </li>
          <li>
            <NavLink to="/fruits" className={({ isActive }) => isActive ? "active" : undefined}>
              <i className="fa-solid fa-shop"></i> Fruits
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>
              <i className="fa-solid fa-address-card"></i> About Us
            </NavLink>
          </li>
          <li className="dropdown-hover">
            <NavLink to="#" >
              <i className="fa-solid fa-phone-volume"></i> Contact
            </NavLink>
            <div className="dropdown-content">
              +91-982343210<br />
              contact:- TheProductHub@gmail.com<br />
              Ahmedabad, Gujarat
            </div>
          </li>
          <li>
            {/* <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>
              <i className="fa-regular fa-newspaper"></i> Blog or News
            </NavLink> */}
          </li>
          <li>
            {/* <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>
              <i className="fa-solid fa-circle-user"></i> My Account
            </NavLink> */}
          </li>
          <li>
            <NavLink to="/cart_buy" className={({ isActive }) => isActive ? "active" : undefined}>
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
