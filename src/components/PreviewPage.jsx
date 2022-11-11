import '../styles/PreviewPage.css'

const PreviewPage = ({ book, previewState }) => {
  let preview

  if (previewState) {
    preview = (
      <div id="book-preview">
        <h1 id="book-preview-title">{book.title}</h1>

        <div id="book-preview-top">
          <img
            src={new URL(`../assets/${book.source}`, import.meta.url)}
            alt=""
          />

          <div id="book-preview-bot">
            <div className="book-details-half">
              <h4 className="book-details">Price: {book.price}</h4>
              <h4 className="book-details">Status: {book.availability}</h4>
            </div>

            <div className="book-details-half">
              <h4 className="book-details">Author: {book.author}</h4>
              <h4 className="book-details">Genre: {book.genre}</h4>
              <h4 className="book-details">Ratings: {book.ratings}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    preview = (
      <div id="book-preview">
        <div id="book-preview">
          <h1 id="book-preview-title">Select a book to preview</h1>
          <div id="book-preview-top">
            <img
              id="book-preview-img"
              src={new URL('../assets/preview.png', import.meta.url)}
              alt=""
            />
            <div id="book-preview-bot">Details will show here</div>
          </div>
        </div>
      </div>
    )
  }

  return <div id="preview-page">{preview}</div>
}

export default PreviewPage
