import { useState } from 'react';
function Shop({imgSrc, price, name, addToCart, key}) {

  const [click, setClick] = useState(false);
  console.log(click);
  const handleClick = () => {
    setClick(!click);
  }

  return (
    <li key={key}>
      <div className="imageContainer">
        <img src={imgSrc} alt={name}className="shopImages"/>
        <button onClick={addToCart, handleClick} className="addToCartButton"><i className={click ? 'fas fa-check': 'fas fa-plus'}></i></button>
      </div>
      <div className={click ? 'addedToCartMessage active' : 'addedToCartMessage inactive'}>
        <p>Added to Cart</p>
      </div>
      <h3>{name}</h3>
      <p className="price">{`$${price}`}</p>
    </li>
  )
}

export default Shop;