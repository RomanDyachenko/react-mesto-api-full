/*const  templateContainer = document.querySelector('#template');

const profileAvatar = document.querySelector('.profile__avatar')
const profileAvatarButton = document.querySelector('.profile__avatar-button')
const popupAvatar = document.querySelector('#popup-avatar')
const cardLikesNumberSelector = '.cards__like-numbers';
const cardsSelector = '.cards';
const profileEditButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup-edit');
const popupEditCloseButton = popupEdit.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const popupEditName = popupEdit.querySelector('.popup__input_type_name');
const profileEmployment = document.querySelector('.profile__employment');
const popupEditEmployment = popupEdit.querySelector('.popup__input_type_employment');
const popupEditForm = popupEdit.querySelector('.popup__container');
const popupAdd = document.querySelector('#popup-add');
const popupAddName = popupAdd.querySelector('.popup__input_type_name');
const popupAddLink = popupAdd.querySelector('.popup__input_type_employment');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = popupAdd.querySelector('.popup__close-button');
const popupAddForm = popupAdd.querySelector('.popup__form');
const popupFullSize = document.querySelector('#popup-full-size');
const popupFullSizeImg = popupFullSize.querySelector('.popup__image');
const popupFullSizePlaceName = document.querySelector('.popup__place-name');
const popupFullSizeCloseButton = popupFullSize.querySelector('.popup__close-button')
const popupAddId = '#popup-add';
const popupEditId = '#popup-edit';
const popupFullSizeId = '#popup-full-size';
const popupSubmitId = '#popup-confidence';
const popupAvatarId = '#popup-avatar';
const objectUserInfo = {
  profileNameSelector: '.profile__name',
  profileEmploymentSelector: '.profile__employment',
  profileAvatarSelector: '.profile__avatar'
}

const objectValidation = {
    popupAdd : '#popup-add',
    popupEdit : '#popup-edit',
    inputSelector : '.popup__input',
    submitButtonSelector : '.popup__submit',
    inactiveButtonClass : 'popup__submit_disabled',
    inputErrorClass : 'popup__input_type_error',
    errorClass : 'popup__span-error_type_active',
    editButtonSelector : '.profile__edit-button',
    addButtonSelector : '.profile__add-button',
  }*/

/*const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];*/

const BaseUrl = "http://localhost:3000";

const Headers = {
  "Content-Type": "application/json",
};

const authBaseUrl = "http://localhost:3000";

const authHeaders = {"Content-Type": "application/json"} ;

export {
  BaseUrl,
  Headers, authBaseUrl, authHeaders /* profileAvatar, profileAvatarButton, popupAvatarId, popupAvatar, popupSubmitId, cardLikesNumberSelector, templateContainer, cardsSelector, objectValidation, initialCards, profileEditButton, popupEdit, popupEditCloseButton, profileName, popupEditName, profileEmployment, popupEditEmployment, popupEditForm, popupAdd, popupAddName, popupAddLink, profileAddButton, popupAddCloseButton, popupAddForm, popupFullSize, popupFullSizeImg, popupFullSizePlaceName, popupFullSizeCloseButton, popupAddId, popupEditId, objectUserInfo, popupFullSizeId*/,
};
