import './styles.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserFormPayment from '../../components/UserFormPayment/UserFormPayment';
import PaymentCard from '../../components/PaymentCard/PaymentCard';

const Payment = () => {
  const navigate = useNavigate();
  const {
    name,
    phone,
    address,
    city,
    department,
    _id,
   } = useSelector((state) => state.users.users);

   const handleClickCart = () => {
    navigate('/carrito');
   }

  return (
    <div className='paymentPage'>
      <section className='paymentPage__buttonEnv'>
        <button className='paymentPage__button' onClick={handleClickCart}>Volver al Carrito</button>
      </section>
      <h2 className='paymentPage__title'>Pago de Productos</h2>
      <section className='paymentPage__container'>
        <UserFormPayment
          name={name}
          phone={phone}
          address={address}
          city={city}
          department={department}
          id={_id}
          key={_id}
        />
        <PaymentCard
          id={_id}
          key={_id}
        />
      </section>
    </div>
  )
}

export default Payment;
