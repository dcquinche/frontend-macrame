import './styles.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';
import ShoppingBag from '../../components/ShoppingBag/ShoppingBag';

const Profile = () => {
  const [navBar, setNavBar] = useState('Profile');
  const {
    name,
    image,
    phone,
    address,
    city,
    department,
    _id,
    email,
    shoppingBag,
    role,
   } = useSelector((state) => state.users.users);

  return (
    <div className='profilePage'>
      <ProfileNavBar navBar={navBar} setNavBar={setNavBar} role={role} />
      <hr className='profilePage__hr' />
      {
        navBar === 'Profile' ? (
          <section>
            <UserInfo
              name={name}
              image={image}
              phone={phone}
              address={address}
              city={city}
              department={department}
              email={email}
              key={_id}
            />
          </section>
        ) : null
      }
      {
        navBar === 'EditProfile' ? (
          <section className='profilePage__EditProfileTab'>
            <UserInfoForm
              name={name}
              image={image}
              phone={phone}
              address={address}
              city={city}
              department={department}
              id={_id}
              key={_id}
            />
          </section>
        ) : null
      }
      {
        navBar === 'ShoppingBag' ? (
          <section>
            <ShoppingBag
              products={shoppingBag}
              key={_id}
            />
          </section>
        ) : null
      }
    </div>
  )
}

export default Profile;
