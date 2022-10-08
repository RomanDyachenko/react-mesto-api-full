import React from "react";
import PopupWithForm from "./PopupWithForm";

export function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="avatar"
      title="Обновить аватар"
      btn_txt="Сохранить"
      type="popup__form_avatar"
      btn_type="popup__submit_avatar"
      container_type="popup__container_avatar"
    >
      <input
        ref={avatarRef}
        className="popup__input popup__input_type_employment"
        id="link"
        type="url"
        placeholder="Ссылка на аватар"
        required
      />
      <span className="popup__span-error" id="error-link"></span>
    </PopupWithForm>
  );
}
