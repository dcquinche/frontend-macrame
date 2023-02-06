import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createCart } from '../../features/cartsSlice';

const ProductCardDetail = ({image, name, price, description, id}) => {
  const [count, setCount] = useState(1);
  const {users} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    setCount(count - 1)
    if (count <= 1) {
      setCount(1)
    }
  }

  const handleClickProducts = () => {
    navigate('/productos');
  }

  const handleClickCart = async (event) => {
    event.preventDefault();
    try {
      dispatch(createCart({ amount: count, product: id, user: users._id }));
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div className='productDetail'>
      <section className='productDetail__figure'>
        <img className='productDetail__img' alt='product' src={image}/>
      </section>
      <section className='productDetail__text'>
        <h2 className='productDetail__description'>{name}</h2>
        <p className='productDetail__description'>{description}</p>
        <p className='productDetail__description productDetail__description--space'><span className='productDetail--strong'>Precio:</span> {price} COP</p>
        <div className='productDetail__price'>
          <p className='productDetail__amount'><span className='productDetail--strong'>Cantidad:</span> </p>
          <div className='productDetail__amount'>
            <span className='productDetail__minus' onClick={handleMinus}>-</span>
            <span className='productDetail__num'>{count}</span>
            <span className='productDetail__plus' onClick={handlePlus}>+</span>
          </div>
          <button className='productDetail__button' onClick={handleClickCart}>Agregar al carrito</button>
          <button className='productDetail__button' onClick={handleClickProducts}>Volver a Productos</button>
        </div>
      </section>
    </div>
  )
}

export default ProductCardDetail;
