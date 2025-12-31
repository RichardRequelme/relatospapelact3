export const CartItem = ({ book, index, onRemove }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>${book.price}</td>
      <td>
        <button
          className="button button--danger"
          onClick={() => onRemove(index)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

