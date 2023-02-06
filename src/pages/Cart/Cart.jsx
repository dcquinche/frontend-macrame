import './styles.css';
import { getCartByUser } from '../../features/cartsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CartCard from '../../components/CartCard/CartCard';

const Cart = () => {
  const {users} = useSelector((state) => state.users);
  const {carts} = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCartByUser({user: users._id}))
  }, [users])

  return (
    <div className='cartPage'>
      <h2 className='cartPage__title'>Productos Seleccionados</h2>
      <section className='cartPage__listProducts'>
        {carts.map((cart) => (
          <CartCard
            productImage={cart.product.image}
            productName={cart.product.name}
            productPrice={cart.product.price}
            amount={cart.amount}
            id={cart._id}
            key={cart._id}
          />
        ))}
      </section>
    </div>
  )
}

export default Cart;
