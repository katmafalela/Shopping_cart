import React from 'react';

const MyStore = () => {
  const myShop = [
    { id: 0, image0: <img className="product-image" src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Chocolate cake" />, name: "Chocolate cake" },
    { id: 1, image1: <img className="product-image" src="https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Caramel Cake" />, name: "Caramel Cake" },
    { id: 2, image2: <img className="product-image" src="https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Vanilla and strawberry cake" />, name: "Vanilla and strawberry cake" },
    { id: 3, image3: <img className="product-image" src="https://images.pexels.com/photos/998239/pexels-photo-998239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Vanilla and strawberry cake" />, name: "Vanilla and strawberry cake" },
    { id: 4, image4: <img className="product-image" src="https://images.pexels.com/photos/25328364/pexels-photo-25328364/free-photo-of-piece-of-a-layered-cake-on-a-plate.jpeg" alt="Caramel cake" />, name: "Caramel cake" },
    { id: 5, image5: <img className="product-image" src="https://images.pexels.com/photos/12407259/pexels-photo-12407259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Caramel cake" />, name: "Caramel cake" }
  ];

  return myShop;
};

export default MyStore;
