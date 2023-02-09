import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCarts } from '../../features/cartsSlice';
import { getAllProducts } from '../../features/productsSlice';
import Gallery from '../../components/Gallery/Gallery';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  useEffect(() => {
    dispatch(getAllCarts())
  },[])

  const cheapestProducts = () => {
    const sorted = products.slice().sort((a, b) => a.price - b.price);
    return sorted.slice(0,6);
  }

  const offers = cheapestProducts(products);

  return (
    <div className='homePage'>
      <Gallery images={[
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675463749/macrameFiles/b517610f40665bca2f8fcf891259cec0.jpg',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675463929/macrameFiles/f89baab0a75a5a3261eb65f43875d701.jpg',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675464018/macrameFiles/2049999aa5e90dd7cd9ba4924b844150.webp',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675464064/macrameFiles/61b2e0656937e45b83506639fdf44d5d.jpg',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675464102/macrameFiles/b5de83b1c574e3044a1f81a7660f4409.jpg',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675464148/macrameFiles/9283afa30820384e9d90341f170823c9.jpg',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675464196/macrameFiles/bc34a2bb73edbf1abcf069ed455db0ad.webp']}
      />
      <h2 className='homePage__title'>Ofertas Destacadas</h2>
      <section className='homePage__listOffers'>
        {
          offers.map((product) => (
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              id={product._id}
              key={product._id}
            />
          ))
        }
      </section>
    </div>
  )
}

export default Home;
