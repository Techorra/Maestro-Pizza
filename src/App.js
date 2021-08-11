import React from "react";
import "./App.css";
import All from "./components/all";
import NavbarMenu from "./components/Routes/navbar-menu";
import NavbarDeals from "./components/Routes/navbar-deals";
import NavbarOffers from "./components/Routes/navbar-offers";
import NavbarContact from "./components/Routes/navbar-contact";
import NavbarOrder from "./components/Routes/navbar-order";
import Nav from "./components/Nav";
import Prices from "./components/MainPage/Prices";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav>
        <Switch>
          <Route path="/" exact>
            <All />
          </Route>
          <Route path="/menu">
            <NavbarMenu />
          </Route>
          <Route path="/deals">
            <NavbarDeals />
          </Route>
          <Route path="/offers">
            <NavbarOffers />
            <NavbarOffers />

          </Route>
          <Route path="/contact">
            <NavbarContact />
          </Route>
          <Route path="/order">
            <NavbarOrder />
          </Route>
        </Switch>
      </Nav>
    </div>
  );
}

export default App;
