import { useEffect, useState } from 'react';

function Shop({imgSrc, price, name, addToCart, id}) {

const [click, setClick] = useState(false);
const handleClick = () => {
  const message = document.querySelector('.addedToCartMessage')
  message.classList.remove('inactive');
  message.classList.add('active');
  setClick(!click);
  console.log('set to true')
  message.classList.add('active');
  // message.classList.add('addedToCartMessage', 'fadeOut')
  setTimeout(() => {
    setClick(!click)
    console.log('set to false')
    message.classList.remove('active', 'fadeOut');
    message.classList.add('inactive');
  }, 3000);
}


// David, 
// I left these small notes here to demonstrate that I did put in serious effort to try to get the pop up "added to cart!" message to function as it should. 
// I've explored all of these options and it still was not behaving the way I wanted it to. The code that I've left running is the closest I've come to solving the problem. *sad face*
// I know the ternary operator {click ? 'addedToCartMessage active fadeOut' : 'addedToCartMessage inactive'} is what is causing the issue but can't seem to pin point a better way. 

// animationend()

// animation-fill: 
 // set timeout 
 // className={
 //   if (click) {
 //     'addedToCartMessage fadeOut'
 //   }.then()
 // }

// if click === true, display addedToCartMessage fadeOut 
// THEN switch true to false
// {click ? 'addedToCartMessage active fadeOut' : 'addedToCartMessage inactive'}

  return (
    <li key={id}>
      <div className="imageContainer">
        <img src={imgSrc} alt={name}className="shopImages"/>
        <button onClick={() => {addToCart(); handleClick()}} className="addToCartButton"><i className={click ? 'fas fa-plus' : 'fas fa-plus'}><span className="sr-only">Add to Cart</span></i></button>
      </div>
      <div className={click ? 'addedToCartMessage active fadeOut' : 'addedToCartMessage inactive'}>
        <p>Added to Cart</p>
      </div>
      <h3>{name}</h3>
      <p className="price">{`$${price}`}</p>
    </li>
  )
}

export default Shop;
