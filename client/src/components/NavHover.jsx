import React from 'react';
import '../style/navhover.css';

import {
  blueImg,
  mangoImg,
  masalaImg,
  pudinaImg,
} from '../media/index';

const NavHover = () => {
  const products = [
    {
      name: 'Blueberry',
      img: blueImg,
    },
    {
      name: 'Mango',
      img: mangoImg,
    },
    {
      name: 'Masala',
      img: masalaImg,
    },
    {
      name: 'Pudina',
      img: pudinaImg,
    },
    
  ];

  // Calculate the number of columns based on the number of products
  const numColumns = Math.min(products.length, 4); // Limit to 4 columns

  // CSS class for the grid container
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${numColumns}, 1fr)`, // Set 4 columns
    gap: '10px', // Adjust the gap between grid items
    width: '80%', // Set a percentage width to fit the parent container
  };

  return (
    <div className="product-grid">
      <div style={gridContainerStyle}>
        {products.map((product, index) => (
          <div className="grid-item" key={index}>
            <img className="product-img" src={product.img} alt={product.name} />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavHover;
