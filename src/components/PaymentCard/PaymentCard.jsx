import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/usersSlice';

const PaymentCard = ({id}) => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);

  const showToastMessage = () => {
    toast.success('Pago Exitoso! Revise su Correo.', {
        position: toast.POSITION.BOTTOM_CENTER
    });
  };

  const handleClickPay = (event) => {
    event.preventDefault();
    try{
      dispatch(updateUser({ shoppingBag: carts, _id: id }))
      showToastMessage();
    } catch(error) {
      throw new Error(error)
    }
  }

  return (
    <div className='paymentCard'>
      <h3 className='paymentCard__title'>Información Tarjeta Debito</h3>
      <section className='paymentCard__input'>
        <p>Número de tarjeta</p>
        <input type='text' placeholder='1234 1234 1234 1234' size='40' />
      </section>
      <section className='paymentCard__data'>
        <section className='paymentCard__input'>
          <p>Vencimiento</p>
          <input type='text' placeholder='MM/AA' size='18' />
        </section>
        <section className='paymentCard__input'>
          <p>Código de Seguridad</p>
          <input type='text' placeholder='123' size='18' />
        </section>
      </section>
      <section className='paymentCard__buttonEnv'>
        <button className='paymentCard__button' onClick={handleClickPay}>Pagar</button>
        <ToastContainer />
      </section>
    </div>
  )
}

export default PaymentCard;
