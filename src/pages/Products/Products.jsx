import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../features/productsSlice';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [results, setResults] = useState(products);
  const [search, setSearch] = useState('');

  const handleClick = () => {
    setResults(products);
  }
  const handleClick1 = () => {
    setSearch('Tapices');
  }
  const handleClick2 = () => {
    setSearch('Atrapasueños');
  }
  const handleClick3 = () => {
    setSearch('Portamacetas');
  }
  const handleClick4 = () => {
    setSearch('Cojines');
  }
  const handleClick5 = () => {
    setSearch('Otros');
  }

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    setResults(!search ? products
      : products.filter((product) => product.category.toLowerCase().includes(search.toLocaleLowerCase())));
  }, [search]);

  return (
    <div className='productsPage'>
      <h2>Productos</h2>
      <section className='productsPage__buttons'>
        <p className='productsPage__titleCategory'>Categorias: </p>
        <button className='productsPage__category' onClick={handleClick}>Todos</button>
        <button className='productsPage__category' onClick={handleClick1}>Tapices</button>
        <button className='productsPage__category' onClick={handleClick2}>Atrapasueños</button>
        <button className='productsPage__category' onClick={handleClick3}>Portamacetas</button>
        <button className='productsPage__category' onClick={handleClick4}>Cojines</button>
        <button className='productsPage__category' onClick={handleClick5}>Otros</button>
      </section>
      <section className='productsPage__list'>
        {results.map((product) => (
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            id={product._id}
            key={product._id}
          />
        ))}
      </section>
    </div>
  )
}

export default Products;
