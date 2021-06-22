// TO DO
// create a function here that with allow the user to click the "shop now" button and have the page automatically scroll the shop into view.
// pass the state usersCart into Header
import Cart from './Cart.js';
import { Link } from 'react-scroll';

function Header({imgSrc, name, price, id, key, usersCart}) {
  return (
    <header className="Header">
      <div className="topBar">
        <p className="logo">GreenSpace <span>plant co.</span></p>
        {
        usersCart.map((selectedItem) => {
          return (
            <Cart
            imgSrc={selectedItem.image}
            name={selectedItem.name}
            price={selectedItem.price}
            id={selectedItem.key}
            key={selectedItem.key}
            // TO DO: only logging the plants key, but i need it to log the name, price and image
            // addToCart={() => addToCart(inventory)}
            />
          )
        })
      }
      </div>
      <div className="wrapper headingFlex">
        <h1>see the world in <span>green</span></h1>
        <button className="shopNow"><Link to="shop" smooth={true} activeClass="active" spy={true}>Shop Now</Link></button>
      </div>
    </header>
  )
}

export default Header;
{/* <button className="cart"><i className="fas fa-shopping-cart"></i></button> */}
// {/* addToCart={() => addToCart(inventory.key)} */}