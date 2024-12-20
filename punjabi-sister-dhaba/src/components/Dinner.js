import React from "react";
import "../css/Meal.css";
import dal from"../images/dal.JPG";
import paneer from"../images/paneer.JPG";
import kulcha from"../images/kulcha.JPG";

const dinnerItems = [
  { name: "Dal Makhani", price: "$25", description: "Slow-cooked lentils in buttery gravy.",image:dal },
  { name: "Paneer Tikka Masala", price: "$30", description: "Paneer cooked in spicy tomato gravy.",image:paneer },
  { name: "Amritsari Kulcha", price: "$15", description: "Stuffed kulcha with chole.",image:kulcha },
];

function Dinner() {
  return (
    <div className="meals-page">
      <header className="meals-header">
        <h1>Dinner Menu</h1>
        <p>End your day with a flavorful Punjabi dinner</p>
      </header>
      <div className="menu-container">
      {dinnerItems.map((item, index) => (
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

export default Dinner;
