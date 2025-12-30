import { useParams } from "react-router-dom";
import books from "../data/books.json";
import { AddToCartButton } from "../components/AddToCartButton";

export default function BookDetail({ addToCart }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));
  if (!book) return <p>Libro no encontrado</p>;

  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} className="book-card__image__detail" />
      <p>Autor: {book.author}</p>
      <p>Descripción: {book.description}</p>
      <p>Precio: ${book.price}</p>

      <AddToCartButton book={book} onAdd={addToCart} />
    </div>
  );
}
