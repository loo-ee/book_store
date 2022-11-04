import '../styles/Checkout.css'

const Checkout = ({ showCounter }) => {
  return (
    <div id="checkout">
      <h3>Proceed to Payment</h3>
      <button id="checkout-button" onClick={() => showCounter()}>
        Checkout
      </button>
    </div>
  )
}

export default Checkout
