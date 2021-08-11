import React from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>Free Delivery With PIZZA OF THE DAY Only 8.99 USD</h1>
            <div className="shop__btn">
              <Link to="/shop" className="btn btn-smart">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
