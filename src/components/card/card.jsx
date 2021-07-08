import React from "react";
import PropTypes from "prop-types";
import "./card.scss";
import {BASE_IMG_URL} from "../../const";

const Card = ({card, onClickFavoriteBtn}) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={`${BASE_IMG_URL}${card.id}.jpg`} width={300} height={400} alt="photo"/>
      </div>
      <div className="card__bottom">
        <div className="card__info">
          <p className="card__value"><span>Name:</span> {card.name}</p>
          <p className="card__value"><span>Gender:</span> {card.gender}</p>
        </div>
        <button
          className={`card__btn${card.isFavorite ? ` card__btn--active` : ``}`}
          onClick={() => onClickFavoriteBtn(card.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1">
            <g transform="translate(0 -1028.4)">
              <path className="card__icon" d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" stroke="#e74c3c" fill="#ffffff"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  onClickFavoriteBtn: PropTypes.func.isRequired
};
export default Card;
