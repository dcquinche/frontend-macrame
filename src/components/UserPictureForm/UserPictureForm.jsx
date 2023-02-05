import './styles.css';

const UserPictureForm = ({image}) => {
  return (
    <div className='userPictureForm'>
      <img className="userPictureForm__image" alt="profile" src={image} />
      <button className='userPictureForm__button'>Seleccionar</button>
      <button className='userPictureForm__button'>Cargar</button>
    </div>
  )
}

export default UserPictureForm;
