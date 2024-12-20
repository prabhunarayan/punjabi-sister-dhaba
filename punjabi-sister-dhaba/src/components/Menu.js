import React from "react";
import "../css/Menu.css";

function Menu() {
  const menuItems = [
    {
      category: "Starters",
      items: [
        { name: "Paneer Tikka", price: "$20", description: "Marinated paneer grilled to perfection." },
        { name: "Tandoori Chicken", price: "$35", description: "Juicy chicken cooked in a clay oven." },
      ],
    },
    {
      category: "Main Course",
      items: [
        { name: "Butter Chicken", price: "$40", description: "Rich creamy tomato gravy with tender chicken." },
        { name: "Dal Makhani", price: "$25", description: "Slow-cooked black lentils in a buttery sauce." },
        { name: "Amritsari Kulcha", price: "$15", description: "Flaky stuffed bread served with chole." },
      ],
    },
    {
      category: "Beverages",
      items: [
        { name: "Lassi", price: "$10", description: "Sweet yogurt-based drink." },
        { name: "Masala Chai", price: "$5", description: "Indian spiced tea." },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Gulab Jamun", price: "$12", description: "Soft, sweet dumplings in sugar syrup." },
        { name: "Rasmalai", price: "$15", description: "Creamy dessert with soft cheese patties." },
      ],
    },
  ];

  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Cuisines</h1>
        <p>Authentic Flavors of Punjabi Sister Dhaba</p>
      </header>
      <div className="menu-container">
        {menuItems.map((section, index) => (
          <div key={index} className="menu-section">
            <h2 className="menu-category">{section.category}</h2>
            <ul className="menu-items">
              {section.items.map((item, i) => (
                <li key={i} className="menu-item">
                  <div className="menu-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="menu-item-price">{item.price}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
