import UserIcon from '@img/user-icon.png'
import Logo from '@img/logo-platzi-video-BW2.png'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import gravatar from '../utils/gravatar.js'
import { logoutRequest } from '../actions'
const Header = (props) => {
  const { user} = props
  const hashUser = Object.keys(user).length > 0
  const handleLogout = (e) => {
    props.logoutRequest({})
  }
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={Logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hashUser ?
            <img src={gravatar(user.email)} alt={user.email} />
            :
            <img src={UserIcon} alt="" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hashUser ?
              <li><Link to="/player">{user.name}</Link></li>
              :
              null
          }
          {
            hashUser ?
              <li><a href="#logout" onClick={handleLogout}>Cerrar sesion</a></li>
              :
              <li><Link to="/login">Iniciar Sesión</Link></li>
          }

        </ul>
      </div>
    </header>
  )
};
const mapStateProps = state => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = {
  logoutRequest
}
export default connect(mapStateProps, mapDispatchToProps)(Header)
