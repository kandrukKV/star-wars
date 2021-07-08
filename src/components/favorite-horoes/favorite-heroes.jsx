import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {setFavoriteCardsAction} from "../../store/actions";
import CardList from "../card-list/card-list";

const FavoriteHeroes = ({favoriteCards, setFavoriteCards, api}) => {

  useEffect(() => {
    const heroes = api.getFavoriteHeroes();
    setFavoriteCards(heroes);
  }, []);

  const favoriteBtnHandler = (id) => {
    const hero = favoriteCards.find((item) => item.id === id);
    const heroes = api.addFavoriteHeroes(hero);
    setFavoriteCards(heroes);
  };

  return (
    <>
      {favoriteCards && favoriteCards.length > 0 ? <CardList cards={favoriteCards} onClickFavoriteBtn={favoriteBtnHandler}/> : <p>No favorite heroes</p>}
    </>
  );
};

const mapStateToProps = (state) => ({
  favoriteCards: state.favoriteCards
});

const mapDispatchToProps = (dispatch) => ({
  setFavoriteCards(cards) {
    dispatch(setFavoriteCardsAction(cards));
  }
});

FavoriteHeroes.propTypes = {
  favoriteCards: PropTypes.array,
  setFavoriteCards: PropTypes.func.isRequired,
  api: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteHeroes);
