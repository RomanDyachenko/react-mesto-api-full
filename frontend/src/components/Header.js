import logo from "../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      {props.children}
    </header>
  );
}

export default Header;
