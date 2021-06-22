// TO DO
// create a function here that with allow the user to click the "shop now" button and have the page automatically scroll the shop into view.
// pass the state usersCart into Header
import Cart from './Cart.js';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="Header">
      <div className="topBar">
        <p className="logo">GreenSpace <span>plant co.</span></p>
        {/* <Cart /> */}
        <button className="cart"><i className="fas fa-shopping-cart"></i></button>
      </div>
      <div className="wrapper headingFlex">
        <h1>see the world in <span>green</span></h1>
        <button><Link to="Shop" smooth={true} activeClass="active" spy={true}>Shop Now</Link></button>
      </div>
    </header>
  )
}

export default Header;