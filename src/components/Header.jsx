import UserIcon from '@img/user-icon.png'
import Logo from '@img/logo-platzi-video-BW2.png'
const Header = () => (
  <header className="header">
    <img className="header__img" src={Logo} alt="Platzi Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={UserIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
