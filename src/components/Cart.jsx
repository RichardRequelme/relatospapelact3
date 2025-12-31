import { CartItem } from "./CartItem";
import { ProceedToCheckoutButton } from "./ProceedToCheckoutButton";

export const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="cart">
      <h3 className="cart__title">Carrito de compras</h3>

      {cart.length === 0 && <p className="cart__empty">Carrito vacío</p>}

      {cart.length > 0 && (
        <>
          {/* tabla */}
          <table className="cart__table">
            <thead>
              <tr>
                <th>Libro</th>
                <th>Precio</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((book, index) => (
                <CartItem
                  key={index}
                  book={book}
                  index={index}
                  onRemove={removeFromCart}
                />
              ))}
            </tbody>
          </table>

          {/* total más botón*/}
          <div className="cart__summary">
            <span className="cart__total">
              Total: <strong>${total.toFixed(2)}</strong>
            </span>

            <ProceedToCheckoutButton />
          </div>
        </>
      )}
    </div>
  );
};
