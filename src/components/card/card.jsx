import React from "react";
import PropTypes from "prop-types";
import "./card.scss";

const Card = ({card}) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt="photo"/>
      </div>
      <p>{card.name}</p>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired
};
export default Card;
