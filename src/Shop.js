import { useState } from 'react';

function Shop({imgSrc, price, name, key}) {
const [usersCart, setUsersCart] = useState([]);
// create function for when an item is clicked, that item is pushed to setCheckoutItems array
const addToCart = (plant) => {
  setUsersCart([...usersCart, plant]);
  console.log(usersCart)
  }
  
  return (
    <li key={key}>
      <div className="imageContainer">
        <img src={imgSrc} alt={name}className="shopImages"/>
        <button onClick={() => addToCart(key)} className="addToCartButton"><i className="fas fa-plus"></i></button>
      </div>
      <div>
        <h3>{name}</h3>
        <p className="price">{`$${price}`}</p>
      </div>
    </li>
  )
}

export default Shop;