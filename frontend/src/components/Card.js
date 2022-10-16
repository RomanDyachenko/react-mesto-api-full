import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import React from "react";

function Card(props) {
  const user = React.useContext(CurrentUserContext);

  const isOwn = props.card._id === user._id;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleCardDelete() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="cards__place">
      <button
        type="button"
        onClick={handleCardDelete}
        className={`cards__delete-button ${
          isOwn ? "cards__delete-button_visible" : "cards__delete-button_hidden"
        }`}
      ></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="cards__place-img"
        onClick={handleClick}
      />
      <div className="cards__name-container">
        <h2 className="cards__name">{props.card.name}</h2>
        <div className="cards__like-container">
          <button
            type="button"
            className={`cards__like-button ${
              props.card.likes.some((i) => {
                return i._id === user._id;
              }) && "cards__like-button_active"
            }`}
            onClick={handleLikeClick}
          />
          <div className="cards__like-numbers">{props.card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
