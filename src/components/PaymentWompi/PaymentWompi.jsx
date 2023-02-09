import './styles.css';

const PaymentWompi = ({totalPrice, order, name, phone, email}) => {
  return (
    <form action="https://checkout.wompi.co/p/" method="GET">
      <input type="hidden" name="public-key" value="pub_test_CD4Ir2fB4jw8vZShUV0vG652GDim1JBd" />
      <input type="hidden" name="currency" value="COP" />
      <input type="hidden" name="amount-in-cents" value={totalPrice} />
      <input type="hidden" name="reference" value={order} />
      <input type="hidden" name="redirect-url" value="https://frontend-macrame.vercel.app/" />
      <input type="hidden" name="customer-data:email" value={email} />
      <input type="hidden" name="customer-data:full-name" value={name} />
      <input type="hidden" name="customer-data:phone-number" value={phone} />
      <button type="submit" className="paymentWompi_button">Pagar con Wompi</button>
    </form>
  )
}

export default PaymentWompi;
