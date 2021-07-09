import React from "react";
import PropTypes from "prop-types";
import CardList from "../card-list/card-list";

const FavoriteHeroes = ({favoriteCards, onClickFavoriteBtn}) => {

  return (
    <>
      {
        favoriteCards && favoriteCards.length > 0 ?
          <CardList cards={favoriteCards} onClickFavoriteBtn={onClickFavoriteBtn}/>
          : <p>No favorite heroes</p>
      }
    </>
  );
};

FavoriteHeroes.propTypes = {
  favoriteCards: PropTypes.array,
  onClickFavoriteBtn: PropTypes.func.isRequired,
};

export default FavoriteHeroes;
