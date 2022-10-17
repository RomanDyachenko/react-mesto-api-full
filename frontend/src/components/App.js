import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import newApi from "../utils/Api.js";
import newAuth from "../utils/Auth";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { AddPlacePopup } from "./AddPlacePopup";
import { Route, Switch, withRouter} from "react-router-dom";
import  Login  from "./Login.js";
import Register from "./Register.js";
import { InfoTooltip } from "./InfoTooltip.js";
import { ProtectedRoute } from "./ProtectedRoute.js";

function App(props) {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isOkStatus, setStatus] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [token, setToken] = React.useState("");
 
  React.useEffect(() => {
    const checkToken = () => {
      if (localStorage.getItem("token")){
        const token = localStorage.getItem("token");
        newAuth
        .getUserInfo(token)
        .then((res) => {
          if (res){
          setEmail(res.email);
          handleToken(token);
          props.history.push("/")
          }
        })
        .then(() => {
          handleLogin(true);
        })
        .catch(() => {
          console.log("Ошибка!")
        })
      }
    }
    checkToken();
  }, [])

  function handleToken(e){
    setToken(e);
  }

  function handleRegisterSubmit(password, email){
    newAuth
      .postNewUser(password, email)
      .then((res) => {
        setStatus(true);
        setInfoTooltipOpen(true);
        props.history.push("/sign-in")
        
      })
      .catch(() => {
        console.log("Ошибка!");
        setStatus(false);
        setInfoTooltipOpen(true);
      })

  }

  function handleLoginSubmit(password, email){
  
    newAuth
    .avtorizationUser(password, email)
    .then((res) => {
      localStorage.setItem("token", res.token);
      handleToken(res.token);
    })
    .then(() => {
      setStatus(true);
      setInfoTooltipOpen(true);
      setEmail(email);
      handleLogin(true);
      props.history.push("/");
      closeAllPopups();
    })
    .catch(() => {
      console.log("Ошибка!")
      setStatus(false);
      setInfoTooltipOpen(true);
    })

  }



  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes?.some((i) => i === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    newApi
      .changeLikeCardStatus(`cards/${card._id}/likes`, isLiked, token)
      .then((newCard) => {
        setCards((state) => {
          return state.map((c) => (c._id === card._id ? newCard : c))
      }
      );})
      .catch(() => {
        console.log("Произошла ошибка");
      });
  }

  function handleCardDelete(card) {
    newApi
      .deleteCard(`cards/${card._id}`, token)
      .then(() => {
        setCards((state) => 
          state.filter((c) =>
            c._id !== card._id 
          )
      )
      })
      .catch(() => {
        console.log("Произошла ошибка");
      });
  }

  React.useEffect(() => {
   
    if(loggedIn){
      newApi
      .getCardsInfo("cards", token)
      .then((res) => {
        const cards = res.reverse();
        setCards(cards);
      })
      .catch(() => {
        console.log("Произошла ошибка");
      })}
  }, [loggedIn]);

  React.useEffect(() => {
    if(loggedIn){
      newApi
      .getUserInfo("users/me", token)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(() => {
        console.log("Произошла ошибка");
      })}
  }, [loggedIn]);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(elem) {
    setSelectedCard(elem);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
    setInfoTooltipOpen(false);
  }

  function handleUpdateUser(obj) {
    newApi
      .patchNewInfo("users/me", obj, token)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(() => {
        console.log("Произошла ошибка");
      });
  }

  function handleUpdateAvatar(obj) {
    newApi
      .changeAvatar("users/me/avatar", obj, token)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(() => {
        console.log("Произошла ошибка");
      });
  }

  function handleUpdateCards(obj) {
    newApi
      .postNewCard("cards", obj, token)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(() => {
        console.log("Произошла ошибка");
      });
  }

  function handleLogin(e){
    setLoggedIn(e);
    console.log(loggedIn);
  }

  function signOut(){
    localStorage.removeItem("token");
    handleLogin(false);
    setToken("");
    props.history.push("/sign-in")
  }

  

  return (
    <Switch>
      <ProtectedRoute
        exact path={"/"}
        loggedIn={loggedIn}
        component={() => {
          return (
            <CurrentUserContext.Provider value={currentUser}>
              <Header>
                <div className="header__container">
                <p className="header__mail">{email}</p>
                <button onClick={signOut} className="header__link" type="button">Выйти</button>
                </div>
              </Header>
              <div className="page">
                <Main
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleAddPlaceClick}
                  onEditAvatar={handleEditAvatarClick}
                  onCardClick={handleCardClick}
                />
                <Footer />
              </div>
              <EditProfilePopup
                onUpdateUser={handleUpdateUser}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
              />
              <EditAvatarPopup
                onUpdateAvatar={handleUpdateAvatar}
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
              />
              <AddPlacePopup
                onUpdateCards={handleUpdateCards}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
              />
              <PopupWithForm
                name="confidence"
                title="Вы уверены?"
                btn_txt="Да"
                type="popup__form_confidence"
                container_type="popup__container_confidence"
              />
              <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </CurrentUserContext.Provider>
          )
        }}
      />
      <Route path="/sign-up">
        <Register
          handleRegisterSubmit={handleRegisterSubmit}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          isOkStatus={isOkStatus}
        />
      </Route>
      <Route path="/sign-in">
        <Login 
        handleLoginSubmit={handleLoginSubmit}
        />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          isOkStatus={isOkStatus}
        />
      </Route>
      
    </Switch>
  );
}

export default withRouter(App);
