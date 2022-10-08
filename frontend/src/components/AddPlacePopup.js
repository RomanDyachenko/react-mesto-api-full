import React from "react";
import PopupWithForm from "./PopupWithForm";

export function AddPlacePopup(props) {
  const nameRef = React.useRef();
  const urlRef = React.useRef();

  React.useEffect(() => {
    nameRef.current.value = "";
    urlRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateCards({
      name: nameRef.current.value,
      link: urlRef.current.value,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="add"
      title="Новое место"
      btn_txt="Сохранить">
          <input
            ref={nameRef}
            className="popup__input popup__input_type_name"
            id="place"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__span-error" id="error-place"></span>
          <input
            ref={urlRef}
            className="popup__input popup__input_type_employment"
            id="url"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__span-error" id="error-url"></span>
        </PopupWithForm>
  );
}