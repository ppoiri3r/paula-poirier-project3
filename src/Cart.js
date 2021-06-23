// pseudo code 

// push the array usersCart into button "cart"
// when the user clicks on the shopping cart icon, the items they've added to their cart appears in a pop up modal 

import { useState } from 'react';

function Cart({usersCart}) {

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }
return (
  <div>
    <button className="cart" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-shopping-cart'}></i></button>
    {
    usersCart.map((selectedItem) => {
      return (
          <div>
            <ul>
              {console.log(selectedItem)}
              <li key={selectedItem.key}>
                <div className="textInfoInCart">
                  <h3 className="carth3">{selectedItem.name}</h3>
                  <p>{`$${selectedItem.price}`}</p>
                </div>
                <img src={selectedItem.image} alt={selectedItem.name}/>
              </li>
            </ul>  
          </div>
            )
          })
        }
  </div>
  )
}
    export default Cart;