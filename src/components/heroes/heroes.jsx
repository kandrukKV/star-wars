import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeFavoriteAction, setCardsAction} from "../../store/actions";
import {transformHeroesToApp} from "../../utils";
import CardList from "../card-list/card-list";
import Preloader from "../preloader/preloader";

const Heroes = ({cards, setCards, api, changeFavorite}) => {

  useEffect(() => {
    api.getHeroes()
      .then((data) => {
        setCards(transformHeroesToApp(data.results, api.getFavoriteHeroes()));
      });
  }, []);

  const favoriteBtnHandler = (id) => {
    const hero = cards.find((item) => item.id === id);
    api.addFavoriteHeroes(hero);
    changeFavorite(id);
  };

  return (
    <>
      {cards ? <CardList onClickFavoriteBtn={favoriteBtnHandler} cards={cards}/> : <Preloader/> }
    </>
  );
};

const mapStateToProps = (state) => ({
  cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
  setCards(cards) {
    dispatch(setCardsAction(cards));
  },
  changeFavorite(id) {
    dispatch(changeFavoriteAction(id));
  }
});

Heroes.propTypes = {
  cards: PropTypes.array,
  setCards: PropTypes.func.isRequired,
  changeFavorite: PropTypes.func.isRequired,
  api: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
