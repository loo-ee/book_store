import '../styles/Counter.css'

const Counter = ({ book, removeCounter }) => {
  return (
    <div id="counter">
      <div id="counter-header">
        <img
          id="store-logo"
          src={new URL('../assets/store-logo.png', import.meta.url)}
          alt=""
        />
        <h2 id="store-name">Louie's Book Store</h2>
        <button id="exit-counter-btn" onClick={() => removeCounter()}>
          &#10060;
        </button>
      </div>
      <div style={{ height: '5px', backgroundColor: '#A8DADC' }}></div>
      <div id="counter-body">
        <div id="item-details">
          <img
            id="book-to-buy"
            src={new URL(`../assets/${book.source}`, import.meta.url)}
            alt=""
          />
          <div id="book-to-buy-details">
            <h1>{book.title}</h1>
            <h2>${book.price}</h2>
          </div>
        </div>
        <div id="payment">
          <div id="money-input">
            <label id="money-input-label">Input Money</label>
            <input type="number" id="money-input-field" />
          </div>
          <button id="submit-money-btn" onClick={() => processPayment()}>
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
