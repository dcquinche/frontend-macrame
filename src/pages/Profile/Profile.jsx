import './styles.css';
import { useState } from 'react';
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';
import { useSelector } from 'react-redux';

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
   } = useSelector((state) => state.users.users);

  return (
    <div className='profilePage'>
      <ProfileNavBar navBar={navBar} setNavBar={setNavBar} />
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
            />
          </section>
        ) : null
      }
      {
        navBar === 'ShoppingBag' ? (
          <section>
            Soy Shopping Bag
          </section>
        ) : null
      }
    </div>
  )
}

export default Profile;
