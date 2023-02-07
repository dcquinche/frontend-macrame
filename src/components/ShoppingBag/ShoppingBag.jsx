import './styles.css';

const ShoppingBag = ({productImage, productName, productPrice, amount}) => {
  return (
    <div className='bag'>
      <img className='bag__img' alt='productImage' src={productImage} />
      <section className='bag__text'>
        <p className='bag__description'>{productName}</p>
        <p>Precio: <span className='bag__description'>{productPrice} COP</span></p>
        <p>Cantidad: <span className='bag__description'>{amount}</span></p>
      </section>
    </div>
  )
}

export default ShoppingBag;
