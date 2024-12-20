import React from "react";
import { Link } from "react-router-dom";
import "../css/HeaderMenu.css";

function HeaderMenu() {
  return (
    <header className="header-menu">
      <div className="logo">
        <h1>Punjabi Sister Dhaba</h1>
      </div>
      <nav className="nav-menu">
        <ul className="nav-links">
        <li>
        <Link to="/breakfast-menu">Breakfast</Link>
      </li>
       
        
          <li>
            <Link to="/lunch">Lunch</Link>
          </li>
          <li>
            <Link to="/dinner">Dinner</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMenu;
