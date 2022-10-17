import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const user = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button
            type="button"
            className="profile__avatar-button"
            onClick={props.onEditAvatar}
          >
            <div className="profile__avatar-container">
              <img
                src={`${user.avatar}`}
                alt={user.name}
                className="profile__avatar"
              />
            </div>
          </button>
          <div className="profile__info-container">
            <h1 id="profileName" className="profile__name">
              {user.name}
            </h1>
            <p id="profileEmployment" className="profile__employment">
              {user.about}
            </p>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        {props.cards?.map((item) => {
          return (
            <Card
              card={item}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              key={item._id}
              onCardDelete={props.onCardDelete}
            />
          );
        })
      }
      </section>
    </main>
  );
}

export default Main;
