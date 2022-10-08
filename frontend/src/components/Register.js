import React from "react";
import Header from "./Header";
import { Link, Route, withRouter } from "react-router-dom";


function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

 

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.handleRegisterSubmit(password, email);

    setPassword("");
    setEmail("");

  }
  
  return (
    <Route>
      <Header>
        <Link to="/sign-in" className="header__link">
          Войти
        </Link>
      </Header>
      <h2 className="popup__title popup__title_type_white">Регистрация</h2>
      <form onSubmit={handleSubmit} className="popup__form">
        <input
          className="popup__input popup__input_type_dark-theme"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
        ></input>
        <input
          className="popup__input popup__input_type_dark-theme"
          type="password"
          value={password}
          autoComplete="on"
          placeholder="Пароль"
          onChange={onChangePassword}
        ></input>
        <button
          className="popup__submit popup__submit_type_light"
          type="submit"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="popup__prompt">
        Уже зарегистрированы?{" "}
        <Link className="popup__link" to="/sign-in">
          Войти
        </Link>
      </p>
    </Route>
  );
}

export default withRouter(Register);
