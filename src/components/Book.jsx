import '../styles/Book.css'

const Book = ({ book, checkout }) => {
  return (
    <div id={`book${book.id}`} className="book">
      <img className="thmb" src={book.source} alt="" />
      <div className="book-info">
        <div className="book-info-top">
          <h4>{book.title}</h4>
        </div>
        <div className="book-info-bot">
          <h3>${book.price}</h3>
          <button className="select-btn" onClick={() => checkout(book.id)}>
            Select
          </button>
        </div>
      </div>
    </div>
  )
}

export default Book
