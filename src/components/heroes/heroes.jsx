import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {changeFavoriteAction, setCardsAction} from "../../store/actions";
import {filterByGender, filterByName} from "../../utils";
import CardList from "../card-list/card-list";
import Preloader from "../preloader/preloader";

const Heroes = ({cards, api, changeFavorite, sexFilterValue, searchFieldValue}) => {

  const favoriteBtnHandler = (id) => {
    const hero = cards.find((item) => item.id === id);
    api.addFavoriteHeroes(hero);
    changeFavorite(id);
  };

  const filteredCardsByGender = filterByGender(sexFilterValue, cards);
  const filteredCards = filterByName(searchFieldValue, filteredCardsByGender);

  return (
    <>
      {cards ? <CardList
        onClickFavoriteBtn={favoriteBtnHandler}
        cards={filteredCards}
      /> : <Preloader/> }
    </>
  );
};

const mapStateToProps = (state) => ({
  sexFilterValue: state.sexFilterValue,
  searchFieldValue: state.searchFieldValue
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
  sexFilterValue: PropTypes.string.isRequired,
  searchFieldValue: PropTypes.string.isRequired,
  api: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);
