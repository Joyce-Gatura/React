



import React from 'react';

const ProductImage = ({ selectedColor, shoeImages }) => {
    return (
        <div className="shoe-image">

            <img src={shoeImages[selectedColor]} alt="Jordan Proto-Lyte" />
        </div>
    );
};

export default ProductImage;
