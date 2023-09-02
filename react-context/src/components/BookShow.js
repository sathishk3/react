import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({book, onDelete, onEdit}) {

  const [showEdit, setShowEdit] = useState(false);
  const {deleteBookById} = useBooksContext();

  const handleDeleteClick = (event) => {
    deleteBookById(book.id);
  }

  const handleEditClick = (event) => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = () => {
    setShowEdit(false);
  }

  let content = <h3>{book.title}</h3>;
  if(showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }
  
  return (
    <div className="book-show">
      {content}
      <div className="actions">
      <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow;