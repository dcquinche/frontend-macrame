import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => {
  return (
    <nav className="navbar">
      <section className="navbar__pages">
        <p className="navbar__items">Inicio</p>
        <Dropdown>
          <Dropdown.Toggle className="navbar__items navbar__categories" variant="success" id="dropdown-basic">Categorías</Dropdown.Toggle>
          <Dropdown.Menu className="navbar__categoriesMenu">
            <Dropdown.Item className="navbar__categoriesItems">Accesorios</Dropdown.Item>
            <Dropdown.Item className="navbar__categoriesItems">Atrapasueños</Dropdown.Item>
            <Dropdown.Item className="navbar__categoriesItems">Cojines</Dropdown.Item>
            <Dropdown.Item className="navbar__categoriesItems">Portamacetas</Dropdown.Item>
            <Dropdown.Item className="navbar__categoriesItems">Tapices</Dropdown.Item>
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
