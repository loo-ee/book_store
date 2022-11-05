import { useState } from 'react'
import '../styles/PaymentResult.css'

const PaymentResult = ({ moneyPaid, isPaymentValid, book }) => {
  const [isPrintReceipt, printReceipt] = useState(false)
  let paymentResult

  if (isPaymentValid) {
    paymentResult = (
      <div id="payment-result" className="success">
        <div id="payment-details">
          <div id="payment-result-header">
            <h1>Payment Received!</h1>
            <img
              id="payment-result-logo"
              src={new URL('../assets/check.png', import.meta.url)}
              alt=""
            />
          </div>
          <h2>Amount Due: ${book.price}</h2>
          <h2>Amount Paid: ${moneyPaid}</h2>
          <h2>Change: ${Math.round(100 * (moneyPaid - book.price)) / 100}</h2>
        </div>
        <div id="payment-button-container">
          <button id="receipt-btn" onClick={() => printReceipt(true)}>
            Print Receipt
          </button>
        </div>
      </div>
    )
  } else {
    paymentResult = (
      <div id="payment-result">
        <div id="payment-result-header">
          <h1 id="low-balance-warning">You have insufficient balance!</h1>
          <img
            id="warning-logo"
            src={new URL('../assets/warning.png', import.meta.url)}
            alt=""
          />
        </div>
        <h2>Please Try Again</h2>
      </div>
    )
  }

  return paymentResult
}

export default PaymentResult
