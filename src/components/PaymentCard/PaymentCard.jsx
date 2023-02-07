import './styles.css';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/usersSlice';

const PaymentCard = ({id}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);

  const handleClickCart = () => {
    navigate('/carrito');
  }

  const showToastMessage = () => {
    toast.success('Pago Exitoso! Revise su Correo.', {
        position: toast.POSITION.BOTTOM_CENTER
    });
  };

  const handleClickPay = (event) => {
    event.preventDefault();
    try{
      dispatch(updateUser({ shoppingBag: carts, _id: id }))
      showToastMessage();
    } catch(error) {
      throw new Error(error)
    }
  }

  return (
    <div>
      <button onClick={handleClickCart}>Volver al Carrito</button>
      <button onClick={handleClickPay}>Pagar</button>
      <ToastContainer />
    </div>
  )
}

export default PaymentCard;
