import { useState, useEffect } from 'react'
import './styles/App.css'
import BookSelection from './components/BookSelection'

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
      <div id="preview-page">Test</div>
    </>
  )
}

export default App
