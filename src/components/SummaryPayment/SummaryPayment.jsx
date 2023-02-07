import './styles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { captureData } from '../../features/saveSlice';
import { useDispatch } from 'react-redux';

const SummaryPayment = ({carts}) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let subTotal = 5000;
    carts.forEach(cart => {
      subTotal = subTotal + (cart.product.price * cart.amount);
      setTotal(subTotal);
    });
  })

  useEffect(() => {
    dispatch(captureData(total));
  }, [total])

  const handleClickPay = () => {
    navigate('/pago');
  }

  return (
    <div className='summary'>
      <h3 className='summary__mainTitle'>Resumen del Pago</h3>
      <h4 className='summary__title'>Productos</h4>
      <section className='summary__subtitles'>
        <h4 className='summary__name'>Nombre</h4>
        <h4 className='summary__amount'>Cantidad</h4>
        <h4>Total</h4>
      </section>
        {
          carts.map((cart) => (
            <section className='summary__subtitlesValues'>
              <p className='summary__name'>{cart.product.name}</p>
              <p className='summary__amount'>{cart.amount}</p>
              <p>{cart.product.price * cart.amount}</p>
            </section>
          ))
        }
      <hr />
      <h4 className='summary__title'>Envío</h4>
      <section className='summary__subtitlesDeliver'>
      <p>A Nivel Nacional</p>
      <p>{5000}</p>
      </section>
      <hr />
      <section className='summary__subtitlesDeliver'>
        <h4 className='summary__title'>Total</h4>
        <h4 className='summary__title'>{total}</h4>
      </section>
      <section className='summary__buttonEnv'>
        <button className='summary__button' onClick={handleClickPay}>Pagar</button>
      </section>
    </div>
  )
}

export default SummaryPayment;
