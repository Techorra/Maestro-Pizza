import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO MAESTRO PIZZINI</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum.
            </p>
            <div className="about__btn">
              <Link to="/about" className="btn btn-smart">
                READ MORE
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza1.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
