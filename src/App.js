import './App.css';
import Header from './Header.js';
import Shop from './Shop.js';
import Footer from './Footer.js';
import { useState, useEffect } from 'react';
import firebase from './firebase.js';

function App() {
  // inventory (already listed in firebase)
  const [plants, setPlants] = useState([]);

  useEffect (() => {
    const dbRef = firebase.database().ref()
    dbRef.on ('value', (response) => {
    const data = response.val();
    const dataPlants = data.Plants;
    const newState = []; 

    for (let item in dataPlants) {
      newState.push({key: item, price: dataPlants[item].price, image: dataPlants[item].image, name: dataPlants[item].title})
    }

    // setting SetPlants to newState, which has all the values from firebase pushed into it. 
    setPlants(newState);

})
}, []);

// UPDATING USERS CART 

  const [usersCart, setUsersCart] = useState([]);
// create function for when an item is clicked, that item is pushed to setUsersCart array
  useEffect(() => {

  }, [usersCart])
  
  const addToCart = (plant) => {
    const current = [...usersCart];
    setUsersCart([...current, plant]);
  }
  

  return (
    <div className="App">
      <Header 
      usersCart={usersCart}/>
      <main className="wrapper Shop" id="shop">
        <section>
          <ul className="shopUl">
      {
        plants.map((inventory) => {
          return (
            <Shop
            imgSrc={inventory.image}
            name={inventory.name}
            price={inventory.price}
            id={inventory.key}
            key={inventory.key}
            addToCart={() => addToCart(inventory)}
            />
          )
        })
      }
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
