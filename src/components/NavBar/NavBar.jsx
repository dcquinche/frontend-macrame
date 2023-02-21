import './styles.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartShopping, faStore } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../features/usersSlice';
import { useEffect } from 'react';

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const { role } = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickHome = () => {
    navigate('/');
  }

  const handleClickProduct = () => {
    navigate('/productos');
  }

  const handleClickCart = () => {
    navigate('/carrito');
  }

  const handleClickProfile = () => {
    navigate('/perfil');
  }

  const handleClickAdmin = () => {
    navigate('/gestion-productos');
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
        {
          isAuthenticated ?
          (
            <>
              {
                role === 'User' ? (
                  <>
                    <FontAwesomeIcon className="navbar__items" icon={faCartShopping} title='Carrito de Compras' onClick={handleClickCart} />
                    <FontAwesomeIcon className="navbar__items" icon={faUserCircle} title='Perfil' onClick={handleClickProfile} />
                    <button className='navbar__logButton' onClick={logout}>Logout</button>
                  </>
                ) : (
                  <>
                    <p>Admin</p>
                    <FontAwesomeIcon className="navbar__items" icon={faStore} title='Gestión de Productos' onClick={handleClickAdmin} />
                    <FontAwesomeIcon className="navbar__items" icon={faUserCircle} title='Perfil' onClick={handleClickProfile} />
                    <button className='navbar__logButton' onClick={logout}>Logout</button>
                  </>
                )
              }
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
