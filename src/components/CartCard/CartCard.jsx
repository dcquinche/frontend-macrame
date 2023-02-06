import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartCard = ({productImage, productName, productPrice, amount}) => {
  return (
    <div className='cart'>
      <img className='cart__img' alt='productImage' src={productImage} />
      <section className='cart__text'>
        <p className='cart__description'>{productName}</p>
        <p>Precio: <span className='cart__description'>{productPrice} COP</span></p>
        <section className='cart__edit'>
          <p>Cantidad: <span className='cart__description'>{amount}</span></p>
          <FontAwesomeIcon className='cart__iconEdit' icon={faPenToSquare} size='xs'/>
        </section>
        <FontAwesomeIcon className='cart__iconDelete' icon={faTrashCan} size='xs'/>
      </section>
    </div>
  )
}

export default CartCard;
