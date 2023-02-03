import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCartShopping, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { captureData } from '../../features/searchSlice';
import { useDispatch } from 'react-redux';
import { DropdownButton } from 'react-bootstrap';

const NavBar = () => {
  const [value, setValue]= useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect= (event) => {
    setValue(event)
  }

  const handleClickCategory = () => {
    try {
      dispatch(captureData(value));
      navigate('/productos');
    } catch (error) {
      throw new Error(error);
    }
  }

  const handleClickHome = () => {
    navigate('/');
  }

  return (
    <nav className="navbar">
      <section className="navbar__pages">
        <p className="navbar__items" onClick={handleClickHome}>Inicio</p>
        <Dropdown>
          <DropdownButton variant="success" id="dropdown-basic" className="navbar__items navbar__categories" title="Categoria" onSelect={handleSelect}>
              <div className='navbar__categoriesMenu'>
                <Dropdown.Item className="navbar__categoriesItems" eventKey="Accesorios">Accesorios</Dropdown.Item>
                <Dropdown.Item className="navbar__categoriesItems" eventKey="Atrapasueños">Atrapasueños</Dropdown.Item>
                <Dropdown.Item className="navbar__categoriesItems" eventKey="Cojines">Cojines</Dropdown.Item>
                <Dropdown.Item className="navbar__categoriesItems" eventKey="Portamacetas">Portamacetas</Dropdown.Item>
                <Dropdown.Item className="navbar__categoriesItems" eventKey="Tapices">Tapices</Dropdown.Item>
                <FontAwesomeIcon className='navbar__glass' icon={faCircleArrowRight} onClick={handleClickCategory} />
              </div>
          </DropdownButton>
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
