// pseudo code 

// push the array usersCart into button "cart"
// when the user clicks on the shopping cart icon, the items they've added to their cart appears in a pop up modal 

function Cart({imgSrc, name, price}) {
  return (
    <>
      <h3>{name}</h3>
      <p>{`$${price}`}</p>
      <img src={imgSrc} alt={name}/>
    </>
  )
}

export default Cart;