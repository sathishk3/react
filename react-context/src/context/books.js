import {useState, createContext} from 'react';

const BooksContext = createContext();

function Provider({ children }) {

  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    return books;
  }


  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  }

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  }
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
      title,
      }
    ];

    setBooks(updatedBooks);
  }

  const valueToShare = {
    books,
    editBookById,
    deleteBookById,
    createBook,
    fetchBooks
  }

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  )
}

export {Provider};

export default BooksContext;

