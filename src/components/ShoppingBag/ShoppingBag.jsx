import './styles.css';
import ShoppingProduct from '../ShoppingProduct/ShoppingProduct';

const ShoppingBag = ({products}) => {
  return (
    <div>
      <h3 className='shoppingBag__title'>Productos Adquiridos</h3>
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
