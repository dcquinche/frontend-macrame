import './styles.css';
import useForm from '../../hooks/useForm';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/usersSlice';
import { createImage } from '../../features/uploadsSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const UserInfoForm = ({name, image, phone, address, city, department, id}) => {
  const [file, setFile] = useState([]);
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();
  const { uploads } = useSelector((state) => state.uploads);

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  };

  const handleClickCreateImage = (event) => {
    event.preventDefault();
    try{
      dispatch(createImage(file))
    } catch(error) {
      throw new Error(error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      dispatch(updateUser({ ...form, image: uploads ? uploads : image, _id: id }))
    } catch(error) {
      throw new Error(error)
    }
  }

  const showToastMessage = () => {
    toast.success('¡Cambios Guardados!', {
        position: toast.POSITION.BOTTOM_CENTER
    });
  };

  return (
    <div>
      <h3 className='userInfoForm__title'>Información de Contacto y Envío</h3>
      <section className='userInfoForm__container'>
        <form className='userPictureForm'>
          <img className="userPictureForm__image" alt="profile" src={uploads ? uploads : image} />
          <div className='userPictureForm__button--input'>
            <input name='image' type='file' accept="image/*" onChange={handleChangeImage} />
          </div>
          <button className='userPictureForm__button' onClick={handleClickCreateImage}>Cargar</button>
        </form>
        <form className='userInfoForm' onSubmit={handleSubmit}>
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

export default UserInfoForm;
