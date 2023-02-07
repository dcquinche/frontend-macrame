import './styles.css';
import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../../features/productSlice';

const ProductById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id]);

  const handleClickProducts = () => {
    navigate('/productos');
  }

  return (
    <div className='productByIdPage'>
      <section className='productByIdPage__buttonEnv'>
        <button className='productByIdPage__button' onClick={handleClickProducts}>Volver a Productos</button>
      </section>
      <h2 className='productByIdPage__title'>Detalle del Producto</h2>
      <section className='productByIdPage__card'>
        {
          product ? (
            <ProductCardDetail
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              id={product._id}
            />
          ) : null
        }
      </section>
    </div>
  )
}

export default ProductById;
