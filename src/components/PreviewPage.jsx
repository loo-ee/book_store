import '../styles/PreviewPage.css'

const PreviewPage = ({ book }) => {
  return (
    <div id="preview-page">
      <div id="book-preview">
        <h1 id="book-preview-title">{book.title}</h1>

        <div id="book-preview-top">
          <img src={book.source} alt="" />

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
    </div>
  )
}

export default PreviewPage
