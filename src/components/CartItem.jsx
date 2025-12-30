export const CartItem = ({ book, onRemove }) => {
  return (
    <tr className="cart__row">
      <td>{book.title}</td>
      <td>${book.price}</td>
      <td>
        <button
          className="button button--danger"
          onClick={() => onRemove(book.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
