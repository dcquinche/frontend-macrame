import './styles.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/usersSlice';
import { useEffect } from 'react';

const NavBar = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();

  const handleClickHome = () => {
    navigate('/');
  }

  const handleClickProduct = () => {
    navigate('/productos');
  }

  const handleClickProfile = () => {
    navigate('/perfil');
  }

  useEffect(()=>{
    if(user) {
      dispatch(createUser({email: user.email, image: user.picture, name: user.name}))
    }
  }, [user])

  return (
    <nav className="navbar">
      <section className="navbar__pages">
        <p className="navbar__items" onClick={handleClickHome}>Inicio</p>
        <p className="navbar__items" onClick={handleClickProduct}>Productos</p>
      </section>
      <section className="navbar__icons">
        <FontAwesomeIcon className="navbar__items" icon={faCartShopping} />
        {
          isAuthenticated ? (
              <>
                <FontAwesomeIcon className="navbar__items" icon={faUserCircle} onClick={handleClickProfile} />
                <button className='navbar__logButton' onClick={logout}>Logout</button>
              </>
          ) : (
            <button className='navbar__logButton' onClick={loginWithRedirect}>Login</button>
          )
        }
      </section>
    </nav>

  )
}

export default NavBar;
