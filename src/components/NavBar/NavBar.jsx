import './styles.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleClickHome = () => {
    navigate('/');
  }

  const handleClickProduct = () => {
    navigate('/productos');
  }

  return (
    <nav className="navbar">
      <section className="navbar__pages">
        <p className="navbar__items" onClick={handleClickHome}>Inicio</p>
        <p className="navbar__items" onClick={handleClickProduct}>Productos</p>
      </section>
      <section className="navbar__icons">
        <FontAwesomeIcon className="navbar__items" icon={faCartShopping} />
        <FontAwesomeIcon className="navbar__items" icon={faUserCircle} />
        {
          isAuthenticated ? (
              <button className='navbar__logButton' onClick={logout}>Logout</button>
          ) : (
            <button className='navbar__logButton' onClick={loginWithRedirect}>Login</button>
          )
        }
      </section>
    </nav>

  )
}

export default NavBar;
