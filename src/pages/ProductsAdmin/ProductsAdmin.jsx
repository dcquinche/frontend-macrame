import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../features/productsSlice';
import ProductCardAdmin from '../../components/ProductCardAdmin/ProductCardAdmin';

const ProductsAdmin = () => {
  const [productsSort, setProductsSort] = useState([]);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    const Products = [].concat(products);
    setProductsSort(Products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
  },[products]);

  const handleClickRegister = () => {
    navigate('/registro-productos');
  }

  return (
    <div className='productsAdminPage'>
      <section className='productsAdminPage__buttonEnv'>
        <button className='productsAdminPage__button' onClick={handleClickRegister}>Producto Nuevo</button>
      </section>
      <h2 className='productsAdminPage__title'>Gestión de Productos</h2>
      <section className='productsAdminPage__list'>
        {productsSort.map((product) => (
          <ProductCardAdmin
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            id={product._id}
            key={product._id}
          />
        ))}
      </section>
    </div>
  )
}

export default ProductsAdmin;
