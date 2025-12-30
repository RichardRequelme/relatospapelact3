export default function Checkout({ cart, clearCart }) {

  const handleCheckout = () => {
    alert("Pedido realizado con éxito");
    clearCart();
  };

  const total = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="checkout">
      <h2 className="checkout__title">Resumen de compra</h2>

      {cart.length === 0 && <p>No hay productos</p>}

      {cart.length > 0 && (
        <>
          {/* tabla */}
          <table className="checkout__table">
            <thead>
              <tr>
                <th>Libro</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>${book.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* total */}
          <div className="checkout__summary">
            <span className="checkout__total">
              Total a pagar: <strong>${total.toFixed(2)}</strong>
            </span>
          </div>

          
          <button
            className="button button--primary"
            onClick={handleCheckout}
          >
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}

