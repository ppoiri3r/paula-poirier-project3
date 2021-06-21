// import firebase from './firebase.js';
// import { useState } from 'react';
// import Shop from './Shop.js';

// function Cart(key) {
//   const [cart, setCart] = useState([]);

// // create function for when an item is clicked, that item is pushed to setCheckoutItems array
// const addToCart = (plant, key) => {
//   const dbRef = firebase.database().ref('usersCart');
//   dbRef.on('value', (response) => {
//     let usersCart = response.val();
//     usersCart = [];
//     usersCart.push(plant)
//     console.log(usersCart);
//     setCart(usersCart)
//   })
// }

//   return (
//     <button className="cart"><i className="fas fa-shopping-cart"></i></button>
//   )
// }

// export default Cart;