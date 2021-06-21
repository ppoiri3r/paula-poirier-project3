import './App.css';
import Header from './Header.js';
import Shop from './Shop.js';
import { useState, useEffect } from 'react';
import firebase from './firebase.js';

function App() {

  // inventory (already listed in firebase)
  const [plants, setPlants] = useState([]);

useEffect ( () => {
const dbRef = firebase.database().ref()

dbRef.on ('value', (response) => {

const data = response.val();

const plants = data.Plants;
// console.log(plants)

const newState = []; 

for (let item in plants) {
  newState.push({key: item, price: plants[item].price, image: plants[item].image, name: plants[item].title})
}

// console.log(newState);
setPlants(newState);

})
}, []);



  return (
    <div className="App">
      <Header />
      <main className="wrapper Shop">
        <section>
          <ul>
      {
        plants.map((inventory) => {
          return (
            <Shop
            imgSrc={inventory.image}
            name={inventory.name}
            price={inventory.price}
            key={inventory.item}
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
