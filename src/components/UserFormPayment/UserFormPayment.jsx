import './styles.css';
import useForm from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/usersSlice';
import { createOrder } from '../../features/orderSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import PaymentWompi from '../PaymentWompi/PaymentWompi';

const UserFormPayment = ({email, name, phone, address, city, department, order, totalPrice, id}) => {
  const { form, handleChange } = useForm({});
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const showToastMessage = () => {
    toast.success('¡Datos Confirmados!', {
        position: toast.POSITION.BOTTOM_CENTER
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      dispatch(updateUser({ ...form, _id: id }));
      dispatch(createOrder({ email: email, name: name, orderNum: order, totalPrice: totalPrice, shoppingBag: carts, user: id }));
      showToastMessage();
    } catch(error) {
      throw new Error(error)
    }
  }

  return (
    <div>
      <h3 className='userFormPayment__title'>Información de Contacto y Envío</h3>
      <section className='userFormPayment__container'>
        <form className='userFormPayment' onSubmit={handleSubmit}>
          <section className='userInfoForm__inputs'>
            <div className='userInfoForm__label'>
              <label>Nombre</label>
              <input className='userInfoForm__input' type="text" name="name" defaultValue={name} onChange={handleChange} />
            </div>
            <div className='userInfoForm__label'>
              <label>Teléfono</label>
              <input className='userInfoForm__input' type="text" name="phone" defaultValue={phone} onChange={handleChange} />
            </div>
            <div className='userInfoForm__label'>
              <label>Dirección</label>
              <input className='userInfoForm__input' type="text" name="address" defaultValue={address} onChange={handleChange} />
            </div>
            <div className='userInfoForm__labels'>
              <div className='userInfoForm__label'>
                <label>Ciudad</label>
                <input className='userInfoForm__input' size="26" type="text" name="city" defaultValue={city} onChange={handleChange} />
              </div>
              <div className='userInfoForm__label'>
                <label>Departamento</label>
                <input className='userInfoForm__input' size="26" type="text" name="department" defaultValue={department} onChange={handleChange} />
              </div>
            </div>
          </section>
          <section className='userInfoFormPayment__buttonEnv'>
            <button className='userInfoForm__button' type='submit'>Confirmar Datos</button>
            <ToastContainer />
            <PaymentWompi
              totalPrice={`${totalPrice}00`} //add cents
              order={order}
              name={name}
              phone={phone}
              email={email}
            />
          </section>
        </form>
      </section>
    </div>
  )
}

export default UserFormPayment;
