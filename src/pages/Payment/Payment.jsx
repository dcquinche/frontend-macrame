import './styles.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserFormPayment from '../../components/UserFormPayment/UserFormPayment';
import PaymentWompi from '../../components/PaymentWompi/PaymentWompi';

const Payment = () => {
  const navigate = useNavigate();
  const {
    name,
    phone,
    address,
    city,
    department,
    _id,
    email,
   } = useSelector((state) => state.users.users);
   const {total, orderNum} = useSelector((state) => state.save.save);

   const handleClickCart = () => {
    navigate('/carrito');
   }

  return (
    <div className='paymentPage'>
      <section className='paymentPage__buttonEnv'>
        <button className='paymentPage__button' onClick={handleClickCart}>Volver al Carrito</button>
      </section>
      <h2 className='paymentPage__title'>Proceso de Pago</h2>
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
        <PaymentWompi
          totalPrice={`${total}00`}
          order={orderNum}
          name={name}
          phone={phone}
          email={email}
        />
      </section>
    </div>
  )
}

export default Payment;
