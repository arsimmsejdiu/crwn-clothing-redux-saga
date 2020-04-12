import React from "react";
import { Link } from "react-router-dom";

import './dropdown.css';

const Dropdown = () => {
  return (
      <div className="dropdown">
        <h1 className="dropdown-toggle">CATEGORY</h1>
        <ul className="dropdow-menu">
            <li><Link to="/shop/hats">HATS</Link></li>
            <li><Link to="/shop/jackets">JACKETS</Link></li>
            <li><Link to="/shop/sneakers">SNEAKERS</Link></li>
            <li><Link to="/shop/womens">WOMEN</Link>S</li>
            <li><Link to="/shop/mens">MENS</Link></li>
        </ul>
      </div>
  )
};

export default Dropdown;
