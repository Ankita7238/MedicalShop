import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart.js';
import Header from './components/Header';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToMedicines = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItemIndex !== -1) {
      // Update the existing item
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      updatedCartItems[existingItemIndex].price = item.price;
      setCartItems(updatedCartItems);
    } else {
      // Add new item to cart
      setCartItems([...cartItems, item]);
    }

    setCartTotal(cartTotal + item.price * item.quantity);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
    setCartQuantity(0);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartQuantity(totalQuantity);
  }, [cartItems]);

  return (
    <div>
      <Header openCart={toggleCart} cartQuantity={cartQuantity} />
      {isCartOpen && <Cart items={cartItems} total={cartTotal} clearCart={clearCart}  cartOpen={setIsCartOpen}/>}
      <h1 style={{ textAlign: 'center' }}>Medicines</h1>
      <Form addToMedicines={addToMedicines} />
      <MedicineList medicines={medicines} addToCart={addToCart} />
    </div>
  );
}

export default App;