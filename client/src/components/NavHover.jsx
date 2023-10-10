import React from 'react';
import '../style/navhover.css';

import {
    blueImg,
    mangoImg,
    masalaImg,
    pudinaImg,
} from '../media/index';
import { useNavigate } from 'react-router';

const NavHover = () => {
    const navigate = useNavigate();

    const products = [
        {
            name: 'Blueberry',
            img: "/images/media/blue_img.png"
        },
        {
            name: 'Mango',
            img: "/images/media/mango_img.png"
        }, {
            name: 'Punjabi',
            img: "/images/media/punjabi_img.png"
        }, {
            name: 'Masala',
            img: "/images/media/masala_img.png"
        },
        {
            name: 'Pudina',
            img: "/images/media/pudina_img.png"
        },

    ];

    // Calculate the number of columns based on the number of products
    const numColumns = Math.min(products.length, 5); // Limit to 4 columns

    // CSS class for the grid container
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`, // Set 4 columns
        gap: '10px', // Adjust the gap between grid items
        width: '100%', // Set a percentage width to fit the parent container
    };

    return (
        <>
            <div className="product-grid">
                <div style={gridContainerStyle}>
                    {products.map((product, index) => (
                        <div                            
                            className="grid-item" 
                            key={index}>
                            <img
                                onClick={() => {navigate("/shop")}} 
                                className="product-img"
                                src={product.img}
                                alt={product.name}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <span className="hover-button main-btn cur" onClick={() => { navigate("/shop") }}>
                Explore Menu
            </span>
        </>
    );
};

export default NavHover;
