import React, { createContext, useState } from "react";
import { v4 as uuid} from 'uuid'

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Name of the wind", author: "Patrick Rothfuss", id: 1 },
    { title: "The final empire", author: "Brandon Sanderson", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([ ...books, { title, author, id: uuid() }])
  }
};
