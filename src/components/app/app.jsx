import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./app.scss";
import Header from "../header/header";
import {AppRoute} from "../../const";
import Main from "../main/main";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="theme-container">
          <Header/>
          <Switch>
            <Route exact path={AppRoute.MAIN}>
              <Main mainTitle="Main"/>
            </Route>
            <Route path={AppRoute.FAVORITES}>
              <Main mainTitle="Favorite heroes"/>
            </Route>
            <Route>
              <Main mainTitle="Page not found"/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
