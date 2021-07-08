import React, {useState} from "react";
import PropTypes from "prop-types";
import "./card-list.scss";
import Card from "../card/card";
import {NUMBER_OF_ITEMS_IN_CARD_LIST} from "../../const";

const CardList = ({cards, onClickFavoriteBtn}) => {

  const [currentPage, setCurrentPage] = useState(0);

  const numberOfPages = Math.ceil(cards.length / NUMBER_OF_ITEMS_IN_CARD_LIST);

  const start = currentPage * NUMBER_OF_ITEMS_IN_CARD_LIST;
  const end = start + NUMBER_OF_ITEMS_IN_CARD_LIST;

  const viewCards = cards.slice(start, end);

  return (
    <>
      <ul className="card-list">
        {viewCards.map((card) =>
          <li className="card-list__item" key={card.name} >
            <Card card={card} onClickFavoriteBtn = {onClickFavoriteBtn}/>
          </li>)}
      </ul>

      <div className="card-list__pagination">
        <button
          className="card-list__btn"
          onClick={() => setCurrentPage((page) => page - 1)}
          disabled={currentPage === 0}
        >Prev</button>
        <p className="card-list__number">{currentPage + 1} of {numberOfPages}</p>
        <button
          className="card-list__btn"
          onClick={() => setCurrentPage((page) => page + 1)}
          disabled={currentPage === numberOfPages - 1}
        >Next</button>
      </div>

    </>
  );
};

export default CardList;

CardList.propTypes = {
  cards: PropTypes.array,
  onClickFavoriteBtn: PropTypes.func.isRequired
};
