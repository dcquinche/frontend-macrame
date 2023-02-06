import './styles.css';

const UserInfo = ({name, phone, address, city, department, image, email}) => {
  return (
    <div className='userInfo'>
      <h3 className='userInfo__title'>Información de Contacto y Envío</h3>
      <section className='userInfo__container'>
        <section className='userInfo__firstText'>
          <img className="userInfo__image" alt="profile" src={image} />
          <p className='userInfo__input'>{name}</p>
          <p className='userInfo__input'>{email}</p>
        </section>
        <section className='userInfo__inputs'>
          <div className='userInfo__label'>
            <label>Teléfono: </label>
            <p className='userInfo__input'>{phone}</p>
          </div>
          <div className='userInfo__label'>
            <label>Dirección: </label>
            <p className='userInfo__input'>{address}</p>
          </div>
          <div className='userInfo__label'>
            <label>Ciudad:</label>
            <p className='userInfo__input'>{city}</p>
          </div>
          <div className='userInfo__label'>
            <label>Departamento: </label>
            <p className='userInfo__input'>{department}</p>
          </div>
        </section>
      </section>
    </div>
  )
}

export default UserInfo;
