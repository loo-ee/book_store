import { useState } from 'react'
import '../styles/BookSelection.css'
import Book from './Book'
import Checkout from './Checkout'

const BookSelection = ({
  books,
  selectedBook,
  setSelectedBook,
  setShowCheckoutStatus,
}) => {
  const [checkoutStatus, setCheckoutStatus] = useState(false)

  const checkout = (bookID) => {
    setSelectedBook(bookID)
    setCheckoutStatus(true)
  }

  const showCheckoutPage = () => {
    setShowCheckoutStatus(true)
  }

  return (
    <div id="book-selection-page">
      <div id="book-selection-heading">
        <h2 style={{ color: 'white' }}>Select a Book to Order</h2>
      </div>
      <div id="books-container">
        {books.map((book) => (
          <Book key={book.id} book={book} checkout={checkout} />
        ))}
      </div>
      {checkoutStatus && <Checkout showCheckoutPage={showCheckoutPage} />}
    </div>
  )
}

export default BookSelection
