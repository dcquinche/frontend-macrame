import './styles.css';
import { Link } from 'react-router-dom';

const ProductCard = ({name, image, price, id}) => {
  return (
    <Link to={`/productos/${id}`} className='product'>
        <img className='product__img' alt='product' src={image}/>
        <h4 className='product__name'>{name}</h4>
        <p className='product__price'>Precio: {price} pesos</p>
    </Link>
  )
}

export default ProductCard;
