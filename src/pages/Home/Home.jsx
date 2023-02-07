import './styles.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCarts } from '../../features/cartsSlice';
import { getAllProducts } from '../../features/productsSlice';
import Gallery from '../../components/Gallery/Gallery';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  useEffect(() => {
    dispatch(getAllCarts())
  },[])

  return (
    <div className='homePage'>
      <Gallery images={[
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675463749/macrameFiles/b517610f40665bca2f8fcf891259cec0.jpg',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675463929/macrameFiles/f89baab0a75a5a3261eb65f43875d701.jpg',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675463971/macrameFiles/bd53cf2f7bcdbca208389467a6b2290b.avif',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675464018/macrameFiles/2049999aa5e90dd7cd9ba4924b844150.webp',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675464064/macrameFiles/61b2e0656937e45b83506639fdf44d5d.jpg',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675464102/macrameFiles/b5de83b1c574e3044a1f81a7660f4409.jpg',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675464148/macrameFiles/9283afa30820384e9d90341f170823c9.jpg',
        'https://res.cloudinary.com/dirhpjaka/image/upload/v1675464196/macrameFiles/bc34a2bb73edbf1abcf069ed455db0ad.webp']} />
    </div>
  )
}

export default Home;
