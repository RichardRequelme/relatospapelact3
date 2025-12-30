import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { BookList } from "../components/BookList";
import books from "../data/books.json";


export default function Home() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar onSearch={setSearch} />

      <BookList books={filteredBooks} />
    </>
  );
}
