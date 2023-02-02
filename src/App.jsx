import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProductsByCategory from './pages/ProductsByCategory/ProductsByCategory';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<ProductsByCategory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
