import React from 'react';
import { Product } from '../types/Product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div style={cardStyle}>
      <div style={imageStyle}>
        <span style={placeholderStyle}>📱</span>
      </div>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{product.name}</h3>
        <p style={descriptionStyle}>{product.description}</p>
        <div style={priceStyle}>${product.price.toFixed(2)}</div>
        <div style={stockStyle}>
          {product.quantity > 0 ? `${product.quantity} in stock` : 'Out of stock'}
        </div>
        <button 
          style={product.quantity > 0 ? buttonStyle : disabledButtonStyle}
          onClick={handleAddToCart}
          disabled={product.quantity === 0}
        >
          {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s',
  cursor: 'pointer',
};

const imageStyle: React.CSSProperties = {
  height: '200px',
  backgroundColor: '#f8f9fa',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1rem',
  borderRadius: '4px',
};

const placeholderStyle: React.CSSProperties = {
  fontSize: '4rem',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'left',
};

const titleStyle: React.CSSProperties = {
  margin: '0 0 0.5rem 0',
  fontSize: '1.2rem',
  color: '#2c3e50',
};

const descriptionStyle: React.CSSProperties = {
  color: '#666',
  fontSize: '0.9rem',
  margin: '0 0 1rem 0',
  lineHeight: '1.4',
};

const priceStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#e74c3c',
  margin: '0.5rem 0',
};

const stockStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  color: '#666',
  margin: '0.5rem 0',
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  width: '100%',
  marginTop: '1rem',
};

const disabledButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: '#bdc3c7',
  cursor: 'not-allowed',
};

export default ProductCard;