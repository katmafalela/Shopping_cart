import React from 'react';
import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import MyStore from './components/MyStore';
import './App.css'; 

function App() {
  const products = MyStore();

  return (
    <CartProvider>
      <div className="App">
        <ProductList products={products} />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
