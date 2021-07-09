import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Api from "../../services/api";
import "./app.scss";
import Header from "../header/header";
import {AppRoute} from "../../const";
import Main from "../main/main";
import Heroes from "../heroes/heroes";
import FavoriteHeroes from "../favorite-heroes/favorite-heroes";

import {setCardsAction, setFavoriteCardsAction} from "../../store/actions";
import {transformHeroesToApp} from "../../utils";


const App = ({cards, setCards, favoriteCards, setFavoriteCards}) => {

  const api = new Api();

  useEffect(() => {
    setFavoriteCards(api.getFavoriteHeroes());
    api.getAllHeroes().then((data) => {
      const allCards = [].concat(...data);
      setCards(transformHeroesToApp(allCards, favoriteCards));
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="theme-container">
          <Header/>
          <Switch>
            <Route exact path={AppRoute.MAIN}>
              <Main mainTitle="Main">
                <Heroes api={api} cards={cards}/>
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

const mapStateToProps = (state) => ({
  cards: state.cards,
  favoriteCards: state.favoriteCards,
});

const mapDispatchToProps = (dispatch) => ({
  setCards(cards) {
    dispatch(setCardsAction(cards));
  },
  setFavoriteCards(cards) {
    dispatch(setFavoriteCardsAction(cards));
  }
});

App.propTypes = {
  cards: PropTypes.array,
  favoriteCards: PropTypes.array,
  setCards: PropTypes.func.isRequired,
  setFavoriteCards: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
