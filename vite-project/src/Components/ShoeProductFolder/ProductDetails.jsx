
import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ selectedColor, setSelectedColor }) => {
    return (
        <div className="details">
            <h2>Women Heels & Pumps</h2>
            <h3>RUNNING COLLECTION</h3>
            <p>
            Personify feminine elegance with heels that are highly fashionable
             and a perfect match to don for on various occasions and even for work.
              Featuring unique designs that elaborates a classy and polished feel to enhance any look.
            </p>
            <div className="colors">
                <span>Available Colors:</span>
                <div className="color-options">
                    <div 
                        className={`color black ${selectedColor === 'black' ? 'selected' : ''}`}
                        onClick={() => setSelectedColor('black')}
                    ></div>
                    <div 
                        className={`color red ${selectedColor === 'red' ? 'selected' : ''}`}
                        onClick={() => setSelectedColor('red')}
                    ></div>
                    <div 
                        className={`color orange ${selectedColor === 'orange' ? 'selected' : ''}`}
                        onClick={() => setSelectedColor('orange')}
                    ></div>
                </div>
            </div>
            <div className="price">
                <span>Ksh. 2000</span>
                <button>BUY NOW</button>
            </div>
        </div>
    );
};

export default ProductDetails;
