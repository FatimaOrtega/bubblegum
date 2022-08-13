import React from "react";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NavBar } from "./components/nav/NavBar";
import { HomePage } from "./pages/home/HomePage";
import { AboutPage } from "./pages/about/AboutPage";
import { ContactPage } from "./pages/contact/ContactPage";

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" >
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
