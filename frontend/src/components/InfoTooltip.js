import React from "react";
import Union from "../images/Union.png"
import Cross_union from "../images/Cross_union.png" 

export function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : "" }`}>
      <div className="popup__container">
      <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <img className="popup__icon" alt={props.isOkStatus ? "Union" : "Cross_union"} src={props.isOkStatus ? Union : Cross_union}/>
        <p className="popup__description">{ props.isOkStatus ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз." 
}</p>
      </div>
    </div>
  );
}
