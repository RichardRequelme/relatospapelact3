import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AddToCartButton } from "../components/AddToCartButton";

export default function BookDetail({ addToCart }) {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://52.91.201.191:8083/api/books/search/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Libro no encontrado");
        }
        return res.json();
      })
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!book) return <p>Libro no encontrado</p>;

  const handleAddToCart = () => {
    addToCart(book);
    alert("Añadido al carrito. Revise su carrito de compras");
  };

  return (
    <div className="book-card">
      <h2>{book.title}</h2>

      <img
        //src={book.image || "https://via.placeholder.com/200"}
        alt={book.title}
        className="book-card__image__detail"
      />

      <p>Autor: {book.author}</p>
      <p>Categoría: {book.category}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Precio: ${book.price}</p>
      <p>Rating: {book.rating}</p>

      <AddToCartButton onAdd={handleAddToCart} />
    </div>
  );
}