import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faSave } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteCart, updateCart } from '../../features/cartsSlice';
import { useState } from 'react';
import useForm from '../../hooks/useForm';

const CartCard = ({productImage, productName, productPrice, amount, id}) => {
  const [edit, setEdit] = useState(false);
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();

  const handleClickDelete = async () => {
    try{
      dispatch(deleteCart(id));
    } catch(error) {
      throw new Error(error);
    }
  }

  const handleClickEdit = () => {
    setEdit(true);
  }

  const handleClickSave = async () => {
    try{
      dispatch(updateCart({ ...form, _id: id }));
      setEdit(false);
    } catch(error) {
      throw new Error(error);
    }
  }

  return (
    <div className='cart'>
      <img className='cart__img' alt='productImage' src={productImage} />
      <section className='cart__text'>
        <p className='cart__description'>{productName}</p>
        <p>Precio: <span className='cart__description'>{productPrice} COP</span></p>
        <section className='cart__edit'>
          {
            edit === false ? (
              <>
                <p>Cantidad: <span className='cart__description'>{amount}</span></p>
                <FontAwesomeIcon className='cart__iconEdit' icon={faPenToSquare} size='xs' onClick={handleClickEdit}/>
              </>
            ) : (
              <>
                <p>Cantidad: <span className='cart__description'><input type='number' name='amount' defaultValue={amount} onChange={handleChange} /></span></p>
                <FontAwesomeIcon className='cart__iconEdit' icon={faSave} size='xs' onClick={handleClickSave}/>
              </>
            )
          }

        </section>
        <FontAwesomeIcon className='cart__iconDelete' icon={faTrashCan} size='xs' onClick={handleClickDelete}/>
      </section>
    </div>
  )
}

export default CartCard;
