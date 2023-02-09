import './styles.css';
import ShoppingProduct from '../ShoppingProduct/ShoppingProduct';
import { getPaymentByUser } from '../../features/paymentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ShoppingBag = ({products}) => {
  const { users } = useSelector((state) => state.users);
  const { payment } = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPaymentByUser({user: users._id}))
  },[users])

  return (
    <div>
      <h3 className='shoppingBag__title'>Información Compras Realizadas</h3>
        {
          payment ? (
            <>
              <section className='shoppingBag__paymentInfo'>
                <p className='shoppingBag__text'>Pedido N°: {payment.orderNum}</p>
                <p className='shoppingBag__text'>Total: {payment.totalPrice} COP</p>
              </section>
              <p className='shoppingBag__text'>Productos Adquiridos</p>
            </>
          ) : null
        }
      <section className='shoppingBag__list'>
        {
          products.map((cart) => (
            <ShoppingProduct
              productImage={cart.product.image}
              productName={cart.product.name}
              productPrice={cart.product.price}
              amount={cart.amount}
              key={cart._id}
            />
          ))
        }
      </section>
    </div>
  )
}

export default ShoppingBag;
