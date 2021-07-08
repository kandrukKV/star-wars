import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Api from "../../services/api";
import "./app.scss";
import Header from "../header/header";
import {AppRoute} from "../../const";
import Main from "../main/main";
import Heroes from "../heroes/heroes";
import FavoriteHeroes from "../favorite-horoes/favorite-heroes";


const App = () => {

  const api = new Api();

  return (
    <Router>
      <div className="app">
        <div className="theme-container">
          <Header/>
          <Switch>
            <Route exact path={AppRoute.MAIN}>
              <Main mainTitle="Main">
                <Heroes api={api}/>
              </Main>
            </Route>
            <Route path={AppRoute.FAVORITES}>
              <Main mainTitle="Favorite heroes">
                <FavoriteHeroes api={api}/>
              </Main>
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
