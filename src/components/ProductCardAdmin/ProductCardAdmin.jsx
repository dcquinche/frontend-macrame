import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct, deleteProduct } from '../../features/productsSlice';
import { createImage } from '../../features/uploadsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faSave, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import useForm from '../../hooks/useForm';

const ProductCardAdmin = ({name, image, price, description, category, id}) => {
  const [edit, setEdit] = useState(false);
  const [file, setFile] = useState([]);
  const { form, handleChange } = useForm({});
  const { uploads } = useSelector((state) => state.uploads);
  const dispatch = useDispatch();

  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  };

  const handleClickCreateImage = (event) => {
    event.preventDefault();
    try{
      dispatch(createImage(file));
    } catch(error) {
      throw new Error(error)
    }
  }

  useEffect(() => {
    localStorage.setItem('upload', uploads);
  },[uploads])

  const handleClickDelete = async () => {
    try{
      dispatch(deleteProduct(id));
    } catch(error) {
      throw new Error(error);
    }
  }

  const handleClickEdit = () => {
    setEdit(true);
  }

  const handleClickExit = () => {
    setEdit(false);
    localStorage.clear();
  }


  const handleClickSave = async () => {
    try{
      dispatch(updateProduct({ ...form, image: localStorage.getItem('upload') ? localStorage.getItem('upload') : image, _id: id }));
      setEdit(false);
      localStorage.clear();
    } catch(error) {
      throw new Error(error);
    }
  }

  console.log(localStorage.getItem('upload'))

  return (
    <div className='productAdmin'>
      {
        edit === false ? (
          <>
            <img className='productAdmin__img' alt='product' src={image}/>
            <h4 className='productAdmin__name'>{name}</h4>
            <p className='productAdmin__description'>{description}</p>
            <p className='productAdmin__description'><strong className='productAdmin__strong--description'>Precio:</strong> {price} pesos</p>
            <p className='productAdmin__description'><strong className='productAdmin__strong--description'>Categoría:</strong> {category}</p>
            <section className='productAdmin__icons'>
              <FontAwesomeIcon className='productAdmin__icon' icon={faPenToSquare} title='Editar' onClick={handleClickEdit}/>
              <FontAwesomeIcon className='productAdmin__icon' icon={faTrashCan} title='Eliminar' onClick={handleClickDelete}/>
            </section>
          </>
        ) : (
          <>
            <section className='productAdmin__buttons'>
              <div className='productAdmin__input--img'>
                <input name='image' type='file' onChange={handleChangeImage} />
              </div>
              <button className='productAdmin__button--upload' onClick={handleClickCreateImage}>Cargar</button>
            </section>
            <input className='productAdmin__name' type='text' name='name' defaultValue={name} onChange={handleChange} />
            <textarea className='productAdmin__description' rows='9' name='description' defaultValue={description} onChange={handleChange} />
            <strong className='productAdmin__strong--price'>Precio:</strong>
            <input className='productAdmin__price' type='number' name='price' defaultValue={price} onChange={handleChange} />
            <strong className='productAdmin__strong--category'>Categoría:</strong>
            <select className='productAdmin__category' name='category' defaultValue={category} onChange={handleChange}>
              <option>Atrapasueños</option>
              <option>Cojines</option>
              <option>Portamacetas</option>
              <option>Tapices</option>
              <option>Otros</option>
            </select>
            <section className='productAdmin__icons'>
              <FontAwesomeIcon className='productAdmin__icon' icon={faSave} title='Guardar' onClick={handleClickSave}/>
              <FontAwesomeIcon className='productAdmin__icon' icon={faXmarkSquare} title='Cancelar' onClick={handleClickExit}/>
            </section>
          </>
        )
      }
    </div>
  )
}

export default ProductCardAdmin;
