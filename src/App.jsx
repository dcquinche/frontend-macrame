import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductById from './pages/ProductById/ProductById';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/productos/:id' element={<ProductById />} />
        <Route path='/perfil' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
