import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserEdit, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const ProfileNavBar = ({ setNavBar, role }) => {
  const handleClickProfile = () => {
    setNavBar('Profile')
  }
  const handleClickEditProfile = () => {
    setNavBar('EditProfile')
  }
  const handleClickShoppingBag = () => {
    setNavBar('ShoppingBag')
  }

  return (
    <div className='ProfileNavBar'>
      <button className='ProfileNavBar__button' onClick={handleClickProfile}><FontAwesomeIcon className='ProfileNavBar__icon' icon={faUser} /> Perfil</button>
      <button className='ProfileNavBar__button' onClick={handleClickEditProfile}><FontAwesomeIcon className='ProfileNavBar__icon' icon={faUserEdit} /> Editar Perfil</button>
      {
        role === 'User' ? (
          <button className='ProfileNavBar__button' onClick={handleClickShoppingBag}><FontAwesomeIcon className='ProfileNavBar__icon' icon={faBagShopping} /> Compras</button>
        ) : null
      }

    </div>
  )
}

export default ProfileNavBar;
