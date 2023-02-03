import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../features/productsSlice';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductsByCategory = () => {
  const { search } = useSelector((state) => state.search);
  const { products } = useSelector((state) => state.products);
  const [filterCategory, setFilterCategory] = useState('');
  const [results, setResults] = useState(products);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilterCategory(search);
  }, [search]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);


  useEffect(() => {
    setResults(!filterCategory ? products
      : products.filter((product) => product.category.toLowerCase().includes(filterCategory.toLocaleLowerCase())));
  }, [filterCategory, products]);

  return (
    <div className='productsPage'>
      <h2>{search}</h2>
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

export default ProductsByCategory;
