export const AddToCartButton = ({ book, onAdd }) => {
  return (
    <button className="button button--primary" onClick={() => onAdd(book)}>
      Añadir al carrito
    </button>
  );
};

