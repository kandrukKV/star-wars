import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setCardsAction} from "../../store/actions";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Api from "../../services/api";
import PropTypes from "prop-types";
import "./app.scss";
import Header from "../header/header";
import {AppRoute} from "../../const";
import Main from "../main/main";
import Preloader from "../preloader/preloader";
import CardList from "../card-list/card-list";

const App = ({cards, setCards}) => {

  const api = new Api();

  useEffect(() => {
    api.getPeople()
      .then((data) => setCards(data.results));
  }, []);

  console.log(cards); //eslint-disable-line

  return (
    <Router>
      <div className="app">
        <div className="theme-container">
          <Header/>
          <Switch>
            <Route exact path={AppRoute.MAIN}>
              <Main mainTitle="Main">
                {cards ? <CardList cards={cards}/> : <Preloader/>}
              </Main>
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

const mapStateToProps = (state) => ({
  cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
  setCards(cards) {
    dispatch(setCardsAction(cards));
  }
});

App. propTypes = {
  cards: PropTypes.array,
  setCards: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
