import { useState } from 'react';

function Shop({imgSrc, price, name, addToCart, id}) {

const [click, setClick] = useState(false);
const handleClick = () => {
  setClick(!click);
}

  return (
    <li key={id}>
      <div className="imageContainer">
        <img src={imgSrc} alt={name} className="shopImages"/>
        <button onClick={() => {addToCart(); handleClick()}} className="addToCartButton"><i className={click ? 'fas fa-plus' : 'fas fa-plus'}><span className="sr-only">Add to Cart</span></i></button>
      </div>
      <h3>{name}</h3>
      <p className="price">{`$${price}`}</p>
    </li>
  )
}

export default Shop;
