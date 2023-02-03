import './styles.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const navigate = useNavigate();

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
        <FontAwesomeIcon className="navbar__items" icon={faUserCircle} />
        <FontAwesomeIcon className="navbar__items" icon={faCartShopping} />
      </section>
    </nav>

  )
}

export default NavBar;
