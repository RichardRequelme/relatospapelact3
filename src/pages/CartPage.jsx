import { Cart } from "../components/Cart";

export const CartPage = ({ cart, removeFromCart }) => {
  return <Cart cart={cart} removeFromCart={removeFromCart} />;
};