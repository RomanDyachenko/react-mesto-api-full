function ImagePopup(props) {
  return (
    <div
      className={`popup popup_type_full-size ${props.card && "popup_opened"}`}
      id="popup-full-size"
    >
      <div className="popup__container popup__container_full-size">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <img src={props.card ? props.card.link : ""} alt={props.card ? props.card.name : ""} className="popup__image" />
        <p className="popup__place-name">{props.card ? props.card.name : ""}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
