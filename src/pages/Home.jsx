import { useState, useEffect  } from "react";
import { SearchBar } from "../components/SearchBar";
import { BookList } from "../components/BookList";
import books from "../data/books.json";


export default function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // 🔹 Cargar todos los libros al iniciar
  useEffect(() => {
    fetch("http://52.91.201.191:8083/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  // 🔹 Buscar por título
  useEffect(() => {
    if (search.trim() === "") {
      fetch("http://52.91.201.191:8083/api/books/all")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    } else {
      fetch(
        `http://52.91.201.191:8083/api/books/search/title?title=${search}`
      )
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }
  }, [search]);

  return (
    <>
      <SearchBar onSearch={setSearch} />
      <BookList books={books} />
    </>
  );
}
