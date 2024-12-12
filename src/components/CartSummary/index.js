// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const itemsPrice = []

      const cartItemsPrices = cartList.map(eachItem =>
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
          <button className="button" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
