import React, { useContext } from 'react';
import CartContext from './CartContext';
import '../App.css'; 

const ProductList = ({ products }) => {
  const { addItem } = useContext(CartContext);

  return (
    <>
      <header><h1>iKhekhe li ka Mfundisi</h1></header>
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            {product.image0 || product.image1 || product.image2 || product.image3 || product.image4 || product.image5}
            <p>{product.name}</p>
            <button onClick={() => addItem(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  </>);
};

export default ProductList;
