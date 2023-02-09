import './styles.css';

const ShoppingProduct = ({productImage, productName, productPrice, amount}) => {
  return (
    <div className='shoppingProduct'>
      <img className='shoppingProduct__img' alt='productImage' src={productImage} />
      <section className='shoppingProduct__text'>
        <p className='shoppingProduct__description'>{productName}</p>
        <p>Precio: <span className='shoppingProduct__description'>{productPrice} COP</span></p>
        <p>Cantidad: <span className='shoppingProduct__description'>{amount}</span></p>
      </section>
    </div>
  )
}

export default ShoppingProduct;
