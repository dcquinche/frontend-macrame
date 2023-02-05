import './styles.css';

const UserInfo = ({name, phone, address, city, department}) => {
  return (
    <div className='userInfo'>
      <h3 className='userInfo__title'>Información de Contacto y Envío</h3>
      <section className='userInfo__inputs'>
        <div className='userInfo__label'>
          <label>Nombre: </label>
          <p className='userInfo__input'>{name}</p>
        </div>
        <div className='userInfo__label'>
          <label>Teléfono: </label>
          <p className='userInfo__input'>{phone}</p>
        </div>
        <div className='userInfo__label'>
          <label>Dirección: </label>
          <p className='userInfo__input'>{address}</p>
        </div>
        <div className='userInfo__labels'>
          <div className='userInfo__label'>
            <label>Ciudad:</label>
            <p className='userInfo__input'>{city}</p>
          </div>
          <div className='userInfo__label'>
            <label>Departamento: </label>
            <p className='userInfo__input'>{department}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserInfo;
