import './styles.css';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../../components/ProductForm/ProductForm';

const ProductRegistration = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/gestion-productos');
  }

  return (
    <div className='productRegPage'>
      <section className='productRegPage__buttonEnv'>
        <button className='productRegPage__button' onClick={handleClickBack}>Volver a Productos</button>
      </section>
      <section className='productRegPage__form'>
        <ProductForm />
      </section>
    </div>
  )
}

export default ProductRegistration;
