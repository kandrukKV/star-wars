import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {setFavoriteCardsAction} from "../../store/actions";
import CardList from "../card-list/card-list";
import {filterByGender, filterByName} from "../../utils";

const FavoriteHeroes = ({favoriteCards, setFavoriteCards, api, sexFilterValue, searchFieldValue}) => {

  useEffect(() => {
    const heroes = api.getFavoriteHeroes();
    setFavoriteCards(heroes);
  }, []);

  const favoriteBtnHandler = (id) => {
    const hero = favoriteCards.find((item) => item.id === id);
    const heroes = api.addFavoriteHeroes(hero);
    setFavoriteCards(heroes);
  };

  const filteredCardsByGender = filterByGender(sexFilterValue, favoriteCards);
  const filteredCards = filterByName(searchFieldValue, filteredCardsByGender);

  return (
    <>
      {favoriteCards && favoriteCards.length > 0 ? <CardList cards={filteredCards} onClickFavoriteBtn={favoriteBtnHandler}/> : <p>No favorite heroes</p>}
    </>
  );
};

const mapStateToProps = (state) => ({
  favoriteCards: state.favoriteCards,
  sexFilterValue: state.sexFilterValue,
  searchFieldValue: state.searchFieldValue
});

const mapDispatchToProps = (dispatch) => ({
  setFavoriteCards(cards) {
    dispatch(setFavoriteCardsAction(cards));
  }
});

FavoriteHeroes.propTypes = {
  favoriteCards: PropTypes.array,
  setFavoriteCards: PropTypes.func.isRequired,
  sexFilterValue: PropTypes.string.isRequired,
  searchFieldValue: PropTypes.string.isRequired,
  api: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteHeroes);
