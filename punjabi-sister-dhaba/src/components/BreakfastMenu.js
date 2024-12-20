import React from "react";
import "../css/BreakfastPage.css";
import allo from"../images/allo-paratha.JPG";
import chhole from"../images/chhole-bhature.JPG";
import chai from"../images/chai.JPG";

const breakfastMenu = [
  {
    name: "Aloo Paratha",
    price: "$5.00",
    description: "Stuffed with spiced mashed potatoes, served with butter and yogurt.",
    image: allo,
  },
  {
    name: "Chole Bhature",
    price: "$6.50",
    description: "Spicy chickpea curry served with fluffy fried bread.",
    image: chhole,
  },
  {
    name: "Masala Chai",
    price: "$2.00",
    description: "Traditional Indian tea brewed with spices and milk.",
    image: chai,
  },
];

function BreakfastPage() {
  return (
    <div className="breakfast-page">
      <header className="breakfast-header">
        <h1>Breakfast Menu</h1>
        <p>Start your day with our delicious Punjabi breakfast options!</p>
      </header>
      <div className="menu-container">
        {breakfastMenu.map((item, index) => (
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

export default BreakfastPage;
