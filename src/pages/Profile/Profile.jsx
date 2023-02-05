import './styles.css';
import { useState } from 'react';
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';
import UserPictureForm from '../../components/UserPictureForm/UserPictureForm';

const Profile = () => {
  const [navBar, setNavBar] = useState('Profile');

  return (
    <div className='profilePage'>
      <ProfileNavBar navBar={navBar} setNavBar={setNavBar} />
      {
        navBar === 'Profile' ? (
          <section>
            <UserInfo />
          </section>
        ) : null
      }
      {
        navBar === 'EditProfile' ? (
          <section className='profilePage__EditProfileTab'>
            <UserPictureForm />
            <UserInfoForm />
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
