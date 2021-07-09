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
import {setCardsAction} from "../../store/actions";
import {filterByGender, filterByName, transformHeroesToApp, getFavoriteHeroes, updateCardList} from "../../utils";


const App = (props) => {

  const {
    cards,
    setCards,
    sexFilterValue,
    searchFieldValue,
  } = props;

  const api = new Api();

  useEffect(() => {
    api.getAllHeroes().then((data) => {
      const allCards = [].concat(...data);
      setCards(transformHeroesToApp(allCards, api.getFavoriteHeroes()));
    });
  }, []);

  const favoriteBtnHandler = (id) => {
    const currentFavoriteList = api.addFavoriteHeroes(id);
    setCards(updateCardList(cards, currentFavoriteList));
  };

  const filteredHeroes = (heroes) => {
    const filteredCardsByGender = filterByGender(sexFilterValue, heroes);
    return filterByName(searchFieldValue, filteredCardsByGender);
  };

  return (
    <Router>
      <div className="app">
        <div className="theme-container">
          <Header/>
          <Switch>
            <Route exact path={AppRoute.MAIN}>
              <Main mainTitle="Main">
                <Heroes
                  cards={filteredHeroes(cards)}
                  onClickFavoriteBtn={favoriteBtnHandler}
                />
              </Main>
            </Route>
            <Route path={AppRoute.FAVORITES}>
              <Main mainTitle="Favorite heroes">
                <FavoriteHeroes
                  favoriteCards={getFavoriteHeroes(filteredHeroes(cards))}
                  onClickFavoriteBtn={favoriteBtnHandler}
                />
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
  sexFilterValue: state.sexFilterValue,
  searchFieldValue: state.searchFieldValue,
});

const mapDispatchToProps = (dispatch) => ({
  setCards(cards) {
    dispatch(setCardsAction(cards));
  },
});

App.propTypes = {
  cards: PropTypes.array,
  setCards: PropTypes.func.isRequired,
  sexFilterValue: PropTypes.string.isRequired,
  searchFieldValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
