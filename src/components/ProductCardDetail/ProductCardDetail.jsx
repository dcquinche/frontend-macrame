import './styles.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCart } from '../../features/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth0 } from "@auth0/auth0-react";

const ProductCardDetail = ({image, name, price, description, id}) => {
  const [count, setCount] = useState(1);
  const {users} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const {loginWithRedirect, isAuthenticated} = useAuth0();

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    setCount(count - 1)
    if (count <= 1) {
      setCount(1)
    }
  }

  const showToastMessage = () => {
    toast.success('¡Producto Agregado!', {
        position: toast.POSITION.BOTTOM_CENTER
    });
  };

  const handleClickCart = async (event) => {
    event.preventDefault();
    try {
      if(isAuthenticated) {
        dispatch(createCart({ amount: count, product: id, user: users._id }));
        showToastMessage();
      } else {
        loginWithRedirect();
      }
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
          <button className='productDetail__button' onClick={handleClickCart}>Agregar al Carrito</button>
          <ToastContainer />
        </div>
      </section>
    </div>
  )
}

export default ProductCardDetail;
