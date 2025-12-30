import { Link } from "react-router-dom";

export const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img
        src={book.image}
        alt={book.title}
        className="book-card__image"
      />

      <h3 className="book-card__title">{book.title}</h3>
      <p className="book-card__author">{book.author}</p>
      <p className="book-card__price">${book.price}</p>

      <Link
        to={`/book/${book.id}`}
        className="book-card__link"
      >
        Ver detalle
      </Link>
    </div>
  );
};
