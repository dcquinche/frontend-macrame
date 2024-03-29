import './styles.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { captureData } from '../../features/saveSlice';
import { faker } from '@faker-js/faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const SummaryPayment = ({carts}) => {
  const [total, setTotal] = useState(0);
  const [orderNum, setOrderNum] = useState(faker.datatype.number().toString());
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    let subTotal = 5000;
    carts.forEach(cart => {
      subTotal = subTotal + (cart.product.price * cart.amount);
      setTotal(subTotal);
    });
  }, [carts])

  useEffect(() => {
    dispatch(captureData({total: total, orderNum: orderNum}));
  }, [total])

  const handleClickGoToPay = () => {
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
            <section className='summary__subtitlesValues' key={cart.id}>
              <div className='summary__table'>
                <p className='summary__name'>{cart.product.name}</p>
              </div>
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
        <button className='summary__button' onClick={handleClickGoToPay}>Continuar <FontAwesomeIcon className='summary_icon' icon={faArrowCircleRight}/></button>
      </section>
    </div>
  )
}

export default SummaryPayment;
