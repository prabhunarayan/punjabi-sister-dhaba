import React from "react";
import "../css/Meal.css";

const breakfastItems = [
  { name: "Aloo Paratha", price: "$12", description: "Served with butter and curd." },
  { name: "Chole Bhature", price: "$15", description: "Fluffy bhature with spicy chole." },
  { name: "Masala Chai", price: "$5", description: "Classic Indian spiced tea." },
];

function BreakFast() {
  return (
    <div className="meals-page">
      <header className="meals-header">
        <h1>Breakfast Menu</h1>
        <p>Start your day with delicious Punjabi breakfast</p>
      </header>
      <div className="meals-container">
        <ul className="meal-items">
          {breakfastItems.map((item, index) => (
            <li key={index} className="meal-item">
              <div className="meal-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="meal-item-price">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BreakFast;
