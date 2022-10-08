import React from "react";
import Header from "./Header";
import { Link, withRouter } from "react-router-dom";




function Login(props) {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    
    props.handleLoginSubmit(password, email);

    setEmail("");
    setPassword("");

  }


  return (
    <>
      <Header>
        <Link to="sign-up" className="header__link">
          Регистрация
        </Link>
      </Header>
      <div className="">
        <h2 className="popup__title popup__title_type_white">Войти</h2>
        <form className="popup__form" onSubmit={handleSubmit}>
          <input className="popup__input popup__input_type_dark-theme" placeholder="Email" onChange={onChangeEmail}></input>
          <input className="popup__input popup__input_type_dark-theme" type="password" autoComplete="on" placeholder="Пароль" onChange={onChangePassword}></input>
          <button className="popup__submit popup__submit_type_light" type="submit">Войти</button>
        </form>
      </div>
    </>
  );
}

export default withRouter(Login);