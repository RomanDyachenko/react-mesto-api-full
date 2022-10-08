import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDesctiption] = React.useState("");
  const userContext = React.useContext(CurrentUserContext);

  /*React.useEffect(() => {
    setName("");
    setDesctiption("");
  }, [props.isOpen]);*/

  React.useEffect(() => {
    setName(userContext.name);
    setDesctiption(userContext.about);
  }, [userContext, props.isOpen]);

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeDescription(e) {
    setDesctiption(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="edit"
      title="Редактировать профиль"
      btn_txt="Сохранить"
    >
      <input
        value={name || ""}
        onChange={onChangeName}
        className="popup__input popup__input_type_name"
        placeholder="Имя"
        id="name"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__span-error" id="error-name"></span>
      <input
        value={description || ""}
        onChange={onChangeDescription}
        className="popup__input popup__input_type_employment"
        placeholder="Профессия"
        id="employment"
        type="text"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__span-error" id="error-employment"></span>
    </PopupWithForm>
  );
}
