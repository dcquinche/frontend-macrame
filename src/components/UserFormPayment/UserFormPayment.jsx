import './styles.css';
import useForm from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../features/usersSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const UserFormPayment = ({name, phone, address, city, department, id}) => {
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      dispatch(updateUser({ ...form, _id: id }))
    } catch(error) {
      throw new Error(error)
    }
  }

  const showToastMessage = () => {
    toast.success('Cambios Guardados !', {
        position: toast.POSITION.BOTTOM_CENTER
    });
  };

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
          <section className='userInfoForm__buttonEnv'>
            <button className='userInfoForm__button' type='submit' onClick={showToastMessage}>Confirmar Datos</button>
            <ToastContainer />
          </section>
        </form>
      </section>
    </div>
  )
}

export default UserFormPayment;
