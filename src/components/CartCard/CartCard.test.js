import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '../../app/store';
import ObjectID from 'bson-objectid';
import CartCard from "./CartCard";

test('render content', () => {
  // Arrange
  const productImage = "https://res.cloudinary.com/dirhpjaka/image/upload/v1675463929/macrameFiles/f89baab0a75a5a3261eb65f43875d701.jpg";
  const productName = "Atrapasueños el Paraiso";
  const productPrice = 120000;
  const amount = 3;
  const id = ObjectID('000000000000000000000000')

  // Act
  render(
    <Provider store={store}>
      <CartCard
        productImage={productImage}
        productName={productName}
        productPrice={productPrice}
        amount={amount}
        id={id}
      />
    </Provider>
  )
  const elementName = screen.getByText('Atrapasueños el Paraiso');

  // Assert
  expect(elementName).toBeInTheDocument();
})
