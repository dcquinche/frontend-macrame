import './styles.css';
import { useSelector } from 'react-redux';
import UserFormPayment from '../../components/UserFormPayment/UserFormPayment';
import PaymentCard from '../../components/PaymentCard/PaymentCard';

const Payment = () => {
  const {
    name,
    phone,
    address,
    city,
    department,
    _id,
   } = useSelector((state) => state.users.users);

  return (
    <div className='paymentPage'>
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
