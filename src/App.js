import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./components";
import { Products, Home, About, SingleProduct, Cart, Error } from "./pages";
import MessengerCustomerChat from "react-messenger-customer-chat";

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
      <MessengerCustomerChat
        pageId="100539752310758"
        appId="2315326005266466"
      />
    </Router>
  );
}

export default App;
