import './styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct, deleteProduct } from '../../features/productsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faSave, faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import useForm from '../../hooks/useForm';

const ProductCardAdmin = ({name, image, price, description, id}) => {
  const [edit, setEdit] = useState(false);
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();

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
  }

  const handleClickSave = () => {
    try{
      dispatch(updateProduct({ ...form, _id: id }));
      setEdit(false);
    } catch(error) {
      throw new Error(error);
    }
  }

  return (
    <div className='productAdmin'>
      {
        edit === false ? (
          <>
            <img className='productAdmin__img' alt='product' src={image}/>
            <h4 className='productAdmin__name'>{name}</h4>
            <p className='productAdmin__description'>{description}</p>
            <p className='productAdmin__price'><strong>Precio:</strong> {price} pesos</p>
            <section className='productAdmin__icons'>
              <FontAwesomeIcon className='productAdmin__icon' icon={faPenToSquare} title='Editar' onClick={handleClickEdit}/>
              <FontAwesomeIcon className='productAdmin__icon' icon={faTrashCan} title='Eliminar' onClick={handleClickDelete}/>
            </section>
          </>
        ) : (
          <>
            <img className='productAdmin__img' alt='product' src={image}/>
            <input className='productAdmin__name' type='text' name='name' defaultValue={name} onChange={handleChange} />
            <textarea className='productAdmin__description' rows='9' name='description' defaultValue={description} onChange={handleChange} />
            <strong className='productAdmin__strong'>Precio:</strong>
            <input className='productAdmin__price' type='number' name='price' defaultValue={price} onChange={handleChange} />
            <section className='productAdmin__icons'>
              <FontAwesomeIcon className='productAdmin__icon' icon={faSave} title='Guardar' onClick={handleClickSave}/>
              <FontAwesomeIcon className='productAdmin__icon' icon={faXmarkSquare} title='Cerrar' onClick={handleClickExit}/>
            </section>
          </>
        )
      }
    </div>
  )
}

export default ProductCardAdmin;
