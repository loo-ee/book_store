import { useState, useEffect } from 'react'
import './styles/App.css'
import BookSelection from './components/BookSelection'
import PreviewPage from './components/PreviewPage'

function App({ books }) {
  const [selectedBook, setSelectedBook] = useState(0)
  const [showCheckoutStatus, setShowCheckoutStatus] = useState(false)

  useEffect(() => {
    console.log(selectedBook)
  }, [selectedBook])

  return (
    <>
      <BookSelection
        books={books}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
        setShowCheckoutStatus={setShowCheckoutStatus}
      />
      {showCheckoutStatus && <PreviewPage book={books[selectedBook - 1]} />}
    </>
  )
}

export default App
