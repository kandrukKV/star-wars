import React from "react";
import PropTypes from "prop-types";

import CardList from "../card-list/card-list";
import Preloader from "../preloader/preloader";

const Heroes = ({cards, onClickFavoriteBtn}) => {

  return (
    <>
      {cards ? <CardList
        onClickFavoriteBtn={onClickFavoriteBtn}
        cards={cards}
      /> : <Preloader/> }
    </>
  );
};


Heroes.propTypes = {
  cards: PropTypes.array,
  onClickFavoriteBtn: PropTypes.func.isRequired,
};

export default Heroes;
