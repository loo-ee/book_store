import '../styles/PaymentResult.css'

const PaymentResult = ({ moneyPaid, isPaymentValid, book }) => {
  let paymentResult

  const receiptPrinter = () => {
    const printWindow = window.open('', '', 'height=700', 'width=600')

    const text = `<div id="payment-header">
      <img id="store-logo" src="./src/assets/store-logo.png" />
      <h2 id="banner-text">Louie's Startup</h2>
    </div> 
    <div id="payment-result">
      <div id="payment-details">
        <div id="payment-result-header">
          <h1>Payment Received!</h1>
          <img id="payment-result-logo" src="./src/assets/check.png" />
        </div>
        <h2>${book.title}</h2>
        <h2>Amount Due: $${book.price}</h2>
        <h2>Amount Paid: $${moneyPaid}</h2>
        <h2>Change: $${
          Math.round(100 * (moneyPaid - Number(book.price))) / 100
        }</h2>
      </div>
    </div>
    
    <style>
      #payment-header {
        display: flex;
        flex-direction: row;
        margin-left: 110px;
        margin-top: 20px;
        margin-bottom: 20px;
        justify-content: start;
      }

      #payment-body {
        padding: 20px;
        overflow-y: scroll;
        max-width: 700px;
      }

      #store-logo {
        width: 70px;
        border-radius: 50%;
        margin-left: -100px;
      }

      #banner-text {
        margin-left: 20px;
      }

      #payment-result {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 10px;
        padding: 20px;

        border: 2px;
        border-style: solid;
        border-radius: 5px;
        background-color: aliceblue;
      }

      #payment-result-header {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      #payment-result-logo {
        width: 40px;
        margin-left: 10px;
      }

      .success {
        flex-direction: row;
      }
    </style>`

    printWindow.document.write(text)
    printWindow.document.close()
    printWindow.print()
  }

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
          <button id="receipt-btn" onClick={receiptPrinter}>
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
