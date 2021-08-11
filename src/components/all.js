import React from "react";
import Header from "./MainPage/Header";
import About from "./MainPage/About";
import Shop from "./MainPage/Shop";
import Menu from "./MainPage/Menu";
import Clients from "./MainPage/Clients";
import Prices from "./MainPage/Prices";
import Footer from "../footer";

function All(){
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />  
      <Footer />
    </div>
  );
};

export default All;
