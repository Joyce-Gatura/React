/* eslint-disable react/prop-types */

const ProductComponent = ({ product }) => {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductComponent;
