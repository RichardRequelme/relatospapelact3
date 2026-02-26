import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Pedido realizado con éxito");
    clearCart();
    navigate("/home");
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
              {cart.map((book, index) => (
                <tr key={index}>
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

          <button className="button button--primary" onClick={handleCheckout}>
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
}

const handleCheckout = async () => {
  const requestBody = {
    items: cart.map((item) => ({
      bookId: item.id,
      price: item.price,
    })),
  };

  try {
    const response = await fetch(
      "/api/payments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    if (!response.ok) {
      throw new Error("Error en la compra");
    }

    const data = await response.json();

    alert("Compra realizada correctamente. ID: " + data.purchaseId);

    clearCart(); // 👈 usar prop
    navigate("/home");

  } catch (error) {
    console.error(error);
    alert("Error procesando la compra");
  }
};
