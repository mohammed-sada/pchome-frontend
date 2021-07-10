import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";

import { Products, Home, About, SingleProduct, Cart, Error } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id">
          <SingleProduct />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
