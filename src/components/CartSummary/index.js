// Write your code here
import Popup from 'reactjs-popup'
import Payment from '../Payment'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const itemsPrice = []

      cartList.map(eachItem =>
        itemsPrice.push(eachItem.price * eachItem.quantity),
      )

      const totalPrice = itemsPrice.reduce(
        (accumulator, item) => accumulator + item,
      )

      return (
        <div className="summary-container">
          <h2 className="total">
            Order Total: <span className="price"> Rs {totalPrice}</span>
          </h2>
          <p className="cart-length">{cartList.length} items in cart</p>

          {
            // <button className="button" type="button">  Checkout </button> }

            <Popup
              modal
              trigger={
                <button className="checkout-btn" type="button">
                  Checkout
                </button>
              }
              position="top left"
            >
              {close => <Payment close={close} />}
            </Popup>
          }
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
