import React from "react";
import PropTypes from "prop-types";
import "./card-list.scss";
import Card from "../card/card";

const CardList = ({cards}) => {
  return (
    <ul className="card-list">
      {cards.map((card) => <Card key={card.id} card={card}/>)}
    </ul>
  );
};

export default CardList;

CardList.propTypes = {
  cards: PropTypes.array
};
