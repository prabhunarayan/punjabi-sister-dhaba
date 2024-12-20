import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h1>Punjabi Sister Dhaba</h1>
      <nav>
        <Link to="/" style={styles.link}>Menu</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "20px",
    backgroundColor: "#FFD700",
    textAlign: "center",
  },
  link: {
    margin: "0 10px",
    textDecoration: "none",
    color: "black",
  },
};

export default Header;
