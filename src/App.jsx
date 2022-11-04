import { useState, useEffect } from 'react'
import './styles/App.css'
import BookSelection from './components/BookSelection'
import PreviewPage from './components/PreviewPage'

function App({ books }) {
  const [selectedBook, setSelectedBook] = useState(0)
  const [checkoutStatus, setCheckoutStatus] = useState(false)
  const [previewState, setPreviewState] = useState(false)

  useEffect(() => {
    console.log(selectedBook)
  }, [selectedBook])

  return (
    <>
      <BookSelection
        books={books}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
        setPreviewState={setPreviewState}
        setCheckoutStatus={setCheckoutStatus}
      />
      <PreviewPage book={books[selectedBook - 1]} previewState={previewState} />
    </>
  )
}

export default App
