import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {
  const navigate = useNavigate();

  const handleClickCategory = () => {
    navigate('/productos');
  }

  return (
    <nav className="navbar">
      <section className="navbar__pages">
        <Link to='/'><p className="navbar__items">Inicio</p></Link>
        <Dropdown>
          <Dropdown.Toggle className="navbar__items navbar__categories" variant="success" id="dropdown-basic">Categorías</Dropdown.Toggle>
          <Dropdown.Menu className="navbar__categoriesMenu">
            <Dropdown.Item className="navbar__categoriesItems" onClick={handleClickCategory}>Accesorios</Dropdown.Item>
            <Dropdown.Item className="navbar__categoriesItems" onClick={handleClickCategory}>Atrapasueños</Dropdown.Item>
            <Dropdown.Item className="navbar__categoriesItems" onClick={handleClickCategory}>Cojines</Dropdown.Item>
            <Dropdown.Item className="navbar__categoriesItems" onClick={handleClickCategory}>Portamacetas</Dropdown.Item>
            <Dropdown.Item className="navbar__categoriesItems" onClick={handleClickCategory}>Tapices</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </section>
      <section className="navbar__icons">
        <FontAwesomeIcon className="navbar__items" icon={faUserCircle} />
        <FontAwesomeIcon className="navbar__items" icon={faCartShopping} />
      </section>
    </nav>

  )
}

export default NavBar;
