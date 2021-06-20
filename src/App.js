import './App.css';
import Header from './Header.js';
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
console.log(plants)

const newState = [];


for (let item in plants) {
  console.log(item)
  newState.push(item)
}

setPlants(newState);
console.log(newState);
})
}, []);



  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
