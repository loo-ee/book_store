import { useState, useEffect } from 'react'
import './styles/App.css'
import BookSelection from './components/BookSelection'
import PreviewPage from './components/PreviewPage'
import Counter from './components/Counter'

function App({ books }) {
  const [selectedBook, setSelectedBook] = useState(0)
  const [checkoutStatus, setCheckoutStatus] = useState(false)
  const [previewState, setPreviewState] = useState(false)
  const [randomBookInCounter, setRandomBookInCounter] = useState(0)

  useEffect(() => {
    console.log(selectedBook)

    if (selectedBook == 4)
      setRandomBookInCounter(Math.round(1 + Math.random() * (3 - 1)))
    else setRandomBookInCounter(selectedBook)
  }, [selectedBook])

  const removeCounter = () => setCheckoutStatus(false)

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
      {checkoutStatus && (
        <Counter
          book={books[randomBookInCounter - 1]}
          removeCounter={removeCounter}
        />
      )}
    </>
  )
}

export default App
