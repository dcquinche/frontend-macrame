import './styles.css';
import ShoppingProduct from '../ShoppingProduct/ShoppingProduct';

const ShoppingBag = ({orderNum, totalPrice, date, shoppingBag}) => {
  return (
    <div className='shoppingBag'>
        {
          orderNum ? (
            <>
              <section className='shoppingBag__paymentInfo'>
                <p className='shoppingBag__text'>Fecha del Pedido: {date.toString().slice(0, 10)}</p>
                <p className='shoppingBag__text'>Número de Orden: {orderNum}</p>
                <p className='shoppingBag__text'>Total: {totalPrice} COP</p>
              </section>
              <p className='shoppingBag__text'>Productos Adquiridos</p>
            </>
          ) : null
        }
      <section className='shoppingBag__list'>
        {
          shoppingBag.map((cart) => (
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
