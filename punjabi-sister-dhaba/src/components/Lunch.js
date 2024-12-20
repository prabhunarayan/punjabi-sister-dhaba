import React from "react";
import "../css/Meal.css";
import sarso from"../images/sarso.JPG";
import butterchicken from"../images/butterchicken.JPG";
import chai from"../images/lassi.JPG";

const lunchItems = [
  { name: "Sarson da Saag & Makki di Roti", price: "$25", description: "A true Punjabi delight.",image:sarso },
  { name: "Butter Chicken", price: "$40", description: "Rich creamy tomato-based chicken curry.",image:butterchicken },
  { name: "Lassi", price: "$10", description: "Sweet and refreshing Punjabi drink.",image:chai },
];

function Lunch() {
  return (
    <div className="meals-page">
      <header className="meals-header">
        <h1>Lunch Menu</h1>
        <p>Enjoy a hearty Punjabi lunch</p>
      </header>
      <div className="menu-container">
      {lunchItems.map((item, index) => (
        <div key={index} className="menu-item">
          <img src={item.image} alt={item.name} className="menu-image" />
          <div className="menu-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="menu-price">{item.price}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Lunch;
