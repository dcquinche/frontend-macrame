import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductById from './pages/ProductById/ProductById';
import Profile from './pages/Profile/Profile';
import Cart from './pages/Cart/Cart';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/productos/:id' element={<ProductById />} />
        <Route path='/carrito' element={<Cart />} />
        {
          isAuthenticated ? (
            <Route path='/perfil' element={<Profile />} />
          ) : null
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
