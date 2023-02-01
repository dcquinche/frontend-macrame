import { useState } from 'react';
import './styles.css';

const ProductCardDetail = ({image, name, price, description}) => {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    setCount(count - 1)
    if (count <= 1) {
      setCount(1)
    }
  }

  return (
    <div className='productDetail'>
      <section className='productDetail__figure'>
        <img className='productDetail__img' alt='product' src={image}/>
      </section>
      <section className='productDetail__text'>
        <h2 className='productDetail__description'>{name}</h2>
        <p className='productDetail__description'>{description}</p>
        <p className='productDetail__description productDetail__description--space'><span className='productDetail--strong'>Precio:</span> {price} COP</p>
        <div className='productDetail__price'>
          <p className='productDetail__amount'><span className='productDetail--strong'>Cantidad:</span> </p>
          <div className='productDetail__amount'>
            <span className='productDetail__minus' onClick={handleMinus}>-</span>
            <span className='productDetail__num'>{count}</span>
            <span className='productDetail__plus' onClick={handlePlus}>+</span>
          </div>
          <button className='productDetail__button'>Agregar al carrito</button>
        </div>
      </section>
    </div>
  )
}

export default ProductCardDetail;
