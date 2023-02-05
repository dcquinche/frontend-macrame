import './styles.css';

const UserInfoForm = () => {
  return (
    <form className='userInfoForm'>
      <h3 className='userInfoForm__title'>Información de Contacto y Envío</h3>
      <section className='userInfoForm__inputs'>
        <div className='userInfoForm__label'>
          <label>Nombre</label>
          <input className='userInfoForm__input' type="text" name="name" />
        </div>
        <div className='userInfoForm__label'>
          <label>Teléfono</label>
          <input className='userInfoForm__input' type="text" name="phone" />
        </div>
        <div className='userInfoForm__label'>
          <label>Dirección</label>
          <input className='userInfoForm__input' type="text" name="address" />
        </div>
        <div className='userInfoForm__labels'>
          <div className='userInfoForm__label'>
            <label>Ciudad</label>
            <input className='userInfoForm__input' size="26" type="text" name="city" />
          </div>
          <div className='userInfoForm__label'>
            <label>Departamento</label>
            <input className='userInfoForm__input' size="26" type="text" name="department" />
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
