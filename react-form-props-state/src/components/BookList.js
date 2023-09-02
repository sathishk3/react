import BookShow from "./BookShow";

function BookList({books, onDelete, onEdit}) {

  const renderedBooks = books.map(book => {
    return (
      <BookShow book={book} onEdit={onEdit} onDelete={onDelete}/>
    )
  })

  return (
    <div className="book-list">{renderedBooks}</div>
  )
}

export default BookList;