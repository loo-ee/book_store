import '../styles/Checkout.css'

const Checkout = ({ selectedBook, showCheckoutPage }) => {
  return (
    <div id="checkout">
      <h3>Proceed to Payment</h3>
      <button id="checkout-button" onClick={() => showCheckoutPage()}>
        Checkout
      </button>
    </div>
  )
}

export default Checkout
