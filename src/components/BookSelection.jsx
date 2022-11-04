import { useState } from 'react'
import '../styles/BookSelection.css'
import Book from './Book'
import Checkout from './Checkout'

const BookSelection = ({
  books,
  setSelectedBook,
  setPreviewState,
  setCheckoutStatus,
}) => {
  const [isBookSelected, setIsBookSelected] = useState(false)

  const showPreview = (bookID) => {
    setSelectedBook(bookID)
    setPreviewState(true)
    setIsBookSelected(true)
  }

  const showCounter = () => {
    setCheckoutStatus(true)
  }

  return (
    <div id="book-selection-page">
      <div id="book-selection-heading">
        <h2 style={{ color: 'white' }}>Select a Book to Order</h2>
      </div>
      <div id="books-container">
        {books.map((book) => (
          <Book key={book.id} book={book} showPreview={showPreview} />
        ))}
      </div>
      {isBookSelected && <Checkout showCounter={showCounter} />}
    </div>
  )
}

export default BookSelection
