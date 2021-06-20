function Shop({imgSrc, price, name}) {
  return (
    <main>
      <section className="wrapper Shop">
        <ul>
          <li>
            <div className="imageContainer">
              <img src={imgSrc} alt={name}className="shopImages"/>
              <button className="addToCartButton"><i class="fas fa-plus"></i></button>
            </div>
            <div>
              <h3>{name}</h3>
              <p>{`$${price}`}</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Shop;