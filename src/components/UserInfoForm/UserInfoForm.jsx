import './styles.css';

const UserInfoForm = ({name, phone, address, city, department}) => {
  return (
    <form className='userInfoForm'>
      <h3 className='userInfoForm__title'>Información de Contacto y Envío</h3>
      <section className='userInfoForm__inputs'>
        <div className='userInfoForm__label'>
          <label>Nombre</label>
          <input className='userInfoForm__input' type="text" name="name" defaultValue={name} />
        </div>
        <div className='userInfoForm__label'>
          <label>Teléfono</label>
          <input className='userInfoForm__input' type="text" name="phone" defaultValue={phone} />
        </div>
        <div className='userInfoForm__label'>
          <label>Dirección</label>
          <input className='userInfoForm__input' type="text" name="address" defaultValue={address} />
        </div>
        <div className='userInfoForm__labels'>
          <div className='userInfoForm__label'>
            <label>Ciudad</label>
            <input className='userInfoForm__input' size="26" type="text" name="city" defaultValue={city} />
          </div>
          <div className='userInfoForm__label'>
            <label>Departamento</label>
            <input className='userInfoForm__input' size="26" type="text" name="department" defaultValue={department} />
          </div>
        </div>
      </section>
      <section className='userInfoForm__buttonEnv'>
        <button className='userInfoForm__button'>Confirmar Datos</button>
      </section>
    </form>
  )
}

export default UserInfoForm;
