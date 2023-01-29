import './styles.css';

const ProductCard = ({nombre, imagen, precio}) => {
  return (
    <div className='product'>
      <img className='product__img' alt='product' src={imagen}/>
      <h4 className='product__name'>{nombre}</h4>
      <p>Precio: {precio} pesos</p>
    </div>
  )
}

export default ProductCard;
