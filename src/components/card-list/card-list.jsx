import React from "react";
import PropTypes from "prop-types";
import "./card-list.scss";
import Card from "../card/card";

const CardList = ({cards, onClickFavoriteBtn}) => {

  return (
    <ul className="card-list">
      {cards.map((card) =>
        <li className="card-list__item" key={card.name} >
          <Card card={card} onClickFavoriteBtn = {onClickFavoriteBtn}/>
        </li>)}
    </ul>
  );
};

export default CardList;

CardList.propTypes = {
  cards: PropTypes.array,
  onClickFavoriteBtn: PropTypes.func.isRequired
};
