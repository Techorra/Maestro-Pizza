import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>

        <ul className="navbar__ul">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/menu"> Menu </Link>
          </li>
          <li>
            <Link to="/deals"> Deals </Link>
          </li>
          <li>
            <Link to="/offers"> Offers </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>

          <li>
            <Link to="/order" className="order">
              ORDER NOW
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
