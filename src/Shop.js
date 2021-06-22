function Shop({imgSrc, price, name, id, addToCart}) {

  return (
    <li key={id}>
      <div className="imageContainer">
        <img src={imgSrc} alt={name}className="shopImages"/>
        <button onClick={addToCart} className="addToCartButton"><i className="fas fa-plus"></i></button>
      </div>
      <div className="addedToCartMessage">
        <p>Added to Cart!</p>
      </div>
      <h3>{name}</h3>
      <p className="price">{`$${price}`}</p>
    </li>
  )
}

export default Shop;