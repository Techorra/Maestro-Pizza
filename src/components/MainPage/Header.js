import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            {/* <h3>Pizza Devlivery</h3> */}
            <h1>MAESTRO PIZINNI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              minus ut mollitia error molestiae quia.
            </p>
            <div className="banner__btn">
              <Link to="/order" className="btn btn-smart">
                DEVLERY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
