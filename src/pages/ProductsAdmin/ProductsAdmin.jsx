import './styles.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../features/productsSlice';
import ProductCardAdmin from '../../components/ProductCardAdmin/ProductCardAdmin';

const ProductsAdmin = () => {
  const { products } = useSelector((state) => state.products);
  const [productsSort, setProductsSort] = useState([]);
  const [results, setResults] = useState(products);
  const [search, setSearch] = useState('');
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

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  useEffect(() => {
    setResults(!search ? productsSort
      : productsSort.filter((product) => product.name.toLowerCase().includes(search.toLocaleLowerCase())));
  });

  return (
    <div className='productsAdminPage'>
      <section className='productsAdminPage__buttonEnv'>
        <button className='productsAdminPage__button' onClick={handleClickRegister}>Producto Nuevo</button>
      </section>
      <h2 className='productsAdminPage__title'>Gestión de Productos</h2>
      <section className="productsAdminPage__filter">
        <p className='productAdminPage__filterName'>Filtro por Nombre: </p>
        <input className='productsAdminPage__input' value={search} type="text" name="name" size='35' onChange={handleChange} />
      </section>
      <section className='productsAdminPage__list'>
        {results.map((product) => (
          <ProductCardAdmin
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
            category={product.category}
            id={product._id}
            key={product._id}
          />
        ))}
      </section>
    </div>
  )
}

export default ProductsAdmin;
