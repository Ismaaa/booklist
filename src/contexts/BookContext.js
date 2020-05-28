import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Name of the wind", author: "Patrick Rothfuss", id: 1 },
    { title: "The final empire", author: "Brandon Sanderson", id: 2 },
  ]);
};
