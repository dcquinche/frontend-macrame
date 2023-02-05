import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserEdit, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const ProfileNavBar = () => {
  return (
    <div className='ProfileNavBar'>
      <button className='ProfileNavBar__button'><FontAwesomeIcon className='ProfileNavBar__icon' icon={faUser} /> Perfil</button>
      <button className='ProfileNavBar__button'><FontAwesomeIcon className='ProfileNavBar__icon' icon={faUserEdit} /> Editar Perfil</button>
      <button className='ProfileNavBar__button'><FontAwesomeIcon className='ProfileNavBar__icon' icon={faBagShopping} /> Compras</button>
    </div>
  )
}

export default ProfileNavBar;
