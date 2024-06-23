// src/components/ProductInfo.js
import React, { useState } from 'react';
import './ProductInfo.css';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import shoeBlack from './assets/shoe-black.png';
import shoeRed from './assets/shoe-red.png';
import shoeOrange from './assets/shoe-orange.png';

const ProductInfo = () => {
    const [selectedColor, setSelectedColor] = useState('red');

    const shoeImages = {
        black: shoeBlack,
        red: shoeRed,
        orange: shoeOrange,
    };

    return (
        <div className="product-info">
            <ProductImage selectedColor={selectedColor} shoeImages={shoeImages} />
            <ProductDetails selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        </div>
    );
};

export default ProductInfo;
