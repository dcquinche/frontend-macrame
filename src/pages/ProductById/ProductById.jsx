import './styles.css';
import ProductCardDetail from "../../components/ProductCardDetail/ProductCardDetail";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../features/productsSlice';

const ProductById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id]);

  return (
    <div className='productByIdPage'>
      <h2 className='productByIdPage__title'>Detalle del Producto</h2>
      <section className='productByIdPage__card'>
        {
          products ? (
            <ProductCardDetail
              name={products.name}
              description={products.description}
              price={products.price}
              image={products.image}
            />
          ) : null
        }
      </section>
    </div>
  )
}

export default ProductById;
