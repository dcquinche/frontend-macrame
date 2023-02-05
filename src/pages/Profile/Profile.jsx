import './styles.css';
import { useState } from 'react';
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';
import UserPictureForm from '../../components/UserPictureForm/UserPictureForm';
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
   } = useSelector((state) => state.users.users);

  return (
    <div className='profilePage'>
      <ProfileNavBar navBar={navBar} setNavBar={setNavBar} />
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
            />
          </section>
        ) : null
      }
      {
        navBar === 'EditProfile' ? (
          <section className='profilePage__EditProfileTab'>
            <UserPictureForm
              image={image}
            />
            <UserInfoForm
              name={name}
              phone={phone}
              address={address}
              city={city}
              department={department}
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
