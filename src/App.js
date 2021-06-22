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
    const plants = data.Plants;
    // creating a new state which i will push values from the Plants object into.
    const newState = []; 

    for (let item in plants) {
      newState.push({key: item, price: plants[item].price, image: plants[item].image, name: plants[item].title})
      // console.log(item);
    }

    // setting SetPlants to newState, which has all the values from firebase pushed into it. 
    setPlants(newState);

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
  }

  const displayMessage = () => {
    
  }




  return (
    <div className="App">
      <Header />
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
            addToCart={() => addToCart(inventory.key), () => displayMessage}
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
