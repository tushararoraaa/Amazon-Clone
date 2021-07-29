import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
      <Route path="/Payment">
          <Header />
          <Payment />
          <Footer />
        </Route>
        <Route path="/login">
          <Header />
          <Login />
          <Footer />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
