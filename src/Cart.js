import { useState } from 'react';

function Cart({usersCart}) {

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }

return (
  <div className="shoppingCart">
    <button className="cart" onClick={handleClick}><i className={click ? 'fas fa-shopping-cart' : 'fas fa-shopping-cart'}><span className="sr-only">Shopping Cart</span></i><p className="lengthInCart">{usersCart.length}</p></button>
    <div className={click ? 'cartDropDown active' : 'cartDropDown inactive'}>
      <h4>your cart</h4>
      <ul>
    {
    usersCart.map((selectedItem) => {
      return (
        <li className="cartLi" key={selectedItem.key}>
          <div className="textInfoInCart">
            <h3>{selectedItem.name}</h3>
            <p>{`$${selectedItem.price}`}</p>
          </div>
          <img src={selectedItem.image} alt={selectedItem.name}/>
        </li>
        )
      })
    }
      </ul> 
      <div>
        {/* ran out of time trying to get the total price function going */}
        <p className="total">total: </p>
        <p className="quantity">quantity: {usersCart.length}</p>
        <button className="paymentButton">Proceed to Payment</button>
      </div>
    </div>
  </div>
  )
}
    export default Cart;