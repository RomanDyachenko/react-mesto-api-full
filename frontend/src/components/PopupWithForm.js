import React from "react";
function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
      id={`popup-${props.name}`}
    >
      <div className={`popup__container ${props.container_type}`}>
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          onSubmit={props.onSubmit}
          className={`popup__form ${props.type}`}
          name={`form-${props.name}`}
          noValidate
        >
          {props.children}
          <button className={`popup__submit ${props.btn_type}`} type="submit">
            {props.btn_txt}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
