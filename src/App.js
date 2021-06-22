import './App.css';
import Header from './Header.js';
import Shop from './Shop.js';
import { useState, useEffect } from 'react';
import firebase from './firebase.js';

function App() {

  // INVENTORY

  // inventory (already listed in firebase)
  const [plants, setPlants] = useState([]);

  useEffect (() => {
    // reference to firebase database
    const dbRef = firebase.database().ref()
    // turning the event listener .on that will listen for changes to firebase database
    dbRef.on ('value', (response) => {
    // storing the response from firebase into a variable
    const data = response.val();
    // storing the object "Plants" from firebase into a variable so it's easier to loop through
    const dataPlants = data.Plants;
    // console.log(dataPlants);
    // creating a new state which i will push values from the Plants object into.
    const newState = []; 

    for (let item in dataPlants) {
      newState.push({key: item, price: dataPlants[item].price, image: dataPlants[item].image, name: dataPlants[item].title})
      // console.log(item)
      // console.log(newState)
    }

    // setting SetPlants to newState, which has all the values from firebase pushed into it. 
    setPlants(newState);
    // console.log(newState);

})
}, []);

// UPDATING USERS CART 

  const [usersCart, setUsersCart] = useState([]);
// create function for when an item is clicked, that item is pushed to setUsersCart array
  useEffect(() => {
    console.log(usersCart);
  }, [usersCart])

  const addToCart = (plant) => {
    const current = [...usersCart];
    setUsersCart([...current, plant]);
    // console.log(current);
  }


  return (
    <div className="App">
      <Header 
      usersCart = {usersCart}/>
      <main className="wrapper Shop" id="shop">
        <section>
          <ul>
      {
        plants.map((inventory) => {
          return (
            <Shop
            imgSrc={inventory.image}
            name={inventory.name}
            price={inventory.price}
            id={inventory.key}
            key={inventory.key}
            // TO DO: only logging the plants key, but i need it to log the name, price and image
            addToCart={() => addToCart(inventory)}
            />
          )
        })
      }
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
