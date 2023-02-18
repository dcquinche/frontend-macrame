import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../features/productsSlice';
import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [results, setResults] = useState(products);
  const [search, setSearch] = useState('');
  const [rangeProducts, setRangeProducts] = useState(null);

  const handleClickCategory = () => {
    const select = document.querySelector('#dropdownCategory');
    const option = select.value;
    if(option === "Todos") {
      setResults(products);
    }
    if(option === "Tapices") {
      setSearch('Tapices');
    }
    if(option === "Atrapasueños") {
      setSearch('Atrapasueños');
    }
    if(option === "Portamacetas") {
      setSearch('Portamacetas');
    }
    if(option === "Cojines") {
      setSearch('Cojines');
    }
    if(option === "Otros") {
      setSearch('Otros');
    }
  }

  const handleClickPriceRange = () => {
    const select = document.querySelector('#dropdownPrice');
    const option = select.value;
    if(option === "range1") {
      setRangeProducts({min: 20000, max: 100000})
    }
    if(option === "range2") {
      setRangeProducts({min: 101000, max: 200000})
    }
    if(option === "range3") {
      setRangeProducts({min: 201000, max: 300000})
    }
    if(option === "range4") {
      setRangeProducts({min: 301000, max: 400000})
    }
    if(option === "range5") {
      setRangeProducts({min: 401000, max: 800000})
    }
  }

  const handleClickOrder = () => {
    const select = document.querySelector('#dropdownOrder');
    const option = select.value;
    if(option === "cheaper") {
      setResults(results.slice().sort((a, b) => a.price - b.price));
    }
    if(option === "moreExpensive") {
      setResults(results.slice().sort((a, b) => b.price - a.price));
    }
  }

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    document.querySelector('#dropdownPrice').value = "range";
  }, [])

  useEffect(() => {
    setResults(!search ? products
      : products.filter((product) => product.category.toLowerCase().includes(search.toLocaleLowerCase())));
  }, [search]);

  useEffect(() => {
    setResults(!rangeProducts ? products
      : products.filter((product)=> product.price <= rangeProducts.max && product.price >= rangeProducts.min));
  }, [rangeProducts]);

  return (
    <div className='productsPage'>
      <h2 className='productsPage__title'>Productos</h2>
      <section className='productsPage__buttons'>
        <p className='productsPage__titleCategory'><strong>Filtrar por: </strong></p>
        <p className='productsPage__titleCategory'>Categoría: </p>
        <select name='dropdownCategory' id='dropdownCategory' className='productsPage__category' onClick={handleClickCategory}>
          <option value="Todos">Todos</option>
          <option value="Tapices">Tapices</option>
          <option value="Atrapasueños">Atrapasueños</option>
          <option value="Portamacetas">Portamacetas</option>
          <option value="Cojines">Cojines</option>
          <option value="Otros">Otros</option>
        </select>
        <p className='productsPage__titleCategory'>Precio: </p>
        <select name='dropdownPrice' id='dropdownPrice' className='productsPage__category' onClick={handleClickPriceRange}>
          <option value="range" disabled>Rangos</option>
          <option value="range1">$20.000 - $100.000</option>
          <option value="range2">$101.000 - $200.000</option>
          <option value="range3">$201.000 - $300.000</option>
          <option value="range4">$301.000 - $400.000</option>
          <option value="range5">$400.000 - $800.000</option>
        </select>
        <p className='productsPage__titleCategory'><strong>Ordenar por: </strong></p>
        <select name='dropdownOrder' id='dropdownOrder' className='productsPage__category' onClick={handleClickOrder}>
          <option value="cheaper">Precio de Menor a Mayor</option>
          <option value="moreExpensive">Precio de Mayor a Menor</option>
        </select>
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
