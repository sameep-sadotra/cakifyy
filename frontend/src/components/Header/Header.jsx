import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite dessert here... </h2>
        <p>
          Welcome to our cake paradise, where every slice tells a story of
          exquisite craftsmanship and premium ingredients. Explore a diverse
          menu curated to delight your senses with an array of decadent
          creations. Our mission is to satisfy your sweet cravings and elevate
          your celebration, one delicious cake at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
