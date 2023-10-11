// importing from react
import React from 'react';
import { useNavigate } from 'react-router';
// importing stylesheet
import '../style/navhover.css';

const NavHover = () => {
    const navigate = useNavigate();

    const products = [
        {
            name: 'Blueberry',
            img: "blue_img.png"
        }, {
            name: 'Mango',
            img: "mango_img.png"
        }, {
            name: 'Punjabi',
            img: "punjabi_img.png"
        }, {
            name: 'Masala',
            img: "masala_img.png"
        }, {
            name: 'Pudina',
            img: "pudina_img.png"
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
                                src={
                                    process.env.PUBLIC_URL + 
                                    "/images/media/" + 
                                    product.img
                                }
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
