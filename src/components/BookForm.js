import React, { useContext, useState, useEffect, useRef } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const { books, dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const titleRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    resetInputs();
  };

  useEffect(() => {
    titleRef.current.focus();
  }, [books]);

  const resetInputs = () => {
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        ref={titleRef}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default BookForm;
