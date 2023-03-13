import './styles.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrdersByUser } from '../../features/orderSlice';
import ProfileNavBar from '../../components/ProfileNavBar/ProfileNavBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';
import ShoppingBag from '../../components/ShoppingBag/ShoppingBag';

const Profile = () => {
  const [navBar, setNavBar] = useState('Profile');
  const dispatch = useDispatch();
  const {
    name,
    image,
    phone,
    address,
    city,
    department,
    _id,
    email,
    role,
   } = useSelector((state) => state.users.users);

   const { order } = useSelector((state) => state.order);

   useEffect(()=>{
    dispatch(getOrdersByUser({user: _id}))
  },[_id])


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
            <h3 className='profilePage__shoppingBagTitle'>Información de Compras Realizadas</h3>
            <section className='profilePage__shoppingBag'>
              {
                order.map((order) => (
                  <ShoppingBag
                    orderNum={order.orderNum}
                    totalPrice={order.totalPrice}
                    shoppingBag={order.shoppingBag}
                    date={order.createdAt}
                  />
                ))
              }
            </section>

          </section>
        ) : null
      }
    </div>
  )
}

export default Profile;
