import React from 'react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, quantity);
    }
  };

  const handleCheckout = () => {
    alert(`Checkout successful! Total: $${state.total.toFixed(2)}`);
    clearCart();
  };

  if (state.items.length === 0) {
    return (
      <div style={containerStyle}>
        <h2>Your Cart</h2>
        <div style={emptyStyle}>Your cart is empty</div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h2>Your Cart</h2>
      
      <div style={cartItemsStyle}>
        {state.items.map((item) => (
          <div key={item.id} style={cartItemStyle}>
            <div style={itemInfoStyle}>
              <h3 style={itemNameStyle}>{item.name}</h3>
              <p style={itemDescStyle}>{item.description}</p>
              <div style={itemPriceStyle}>${item.price.toFixed(2)} each</div>
            </div>
            
            <div style={quantityControlStyle}>
              <button
                onClick={() => handleQuantityChange(item.id, item.cartQuantity - 1)}
                style={quantityButtonStyle}
              >
                -
              </button>
              <span style={quantityStyle}>{item.cartQuantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.cartQuantity + 1)}
                style={quantityButtonStyle}
              >
                +
              </button>
            </div>
            
            <div style={itemTotalStyle}>
              ${(item.price * item.cartQuantity).toFixed(2)}
            </div>
            
            <button
              onClick={() => removeFromCart(item.id)}
              style={removeButtonStyle}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div style={summaryStyle}>
        <div style={totalStyle}>
          <strong>Total: ${state.total.toFixed(2)}</strong>
        </div>
        <div style={actionsStyle}>
          <button onClick={clearCart} style={clearButtonStyle}>
            Clear Cart
          </button>
          <button onClick={handleCheckout} style={checkoutButtonStyle}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem',
};

const emptyStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '2rem',
  fontSize: '1.2rem',
  color: '#666',
};

const cartItemsStyle: React.CSSProperties = {
  marginBottom: '2rem',
};

const cartItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  border: '1px solid #ddd',
  borderRadius: '8px',
  marginBottom: '1rem',
  backgroundColor: 'white',
  gap: '1rem',
};

const itemInfoStyle: React.CSSProperties = {
  flex: 1,
};

const itemNameStyle: React.CSSProperties = {
  margin: '0 0 0.5rem 0',
  fontSize: '1.1rem',
};

const itemDescStyle: React.CSSProperties = {
  margin: '0 0 0.5rem 0',
  color: '#666',
  fontSize: '0.9rem',
};

const itemPriceStyle: React.CSSProperties = {
  color: '#e74c3c',
  fontWeight: 'bold',
};

const quantityControlStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const quantityButtonStyle: React.CSSProperties = {
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
  fontSize: '1rem',
};

const quantityStyle: React.CSSProperties = {
  minWidth: '30px',
  textAlign: 'center',
  fontSize: '1rem',
};

const itemTotalStyle: React.CSSProperties = {
  fontWeight: 'bold',
  fontSize: '1.1rem',
  minWidth: '80px',
  textAlign: 'right',
};

const removeButtonStyle: React.CSSProperties = {
  backgroundColor: '#e74c3c',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer',
};

const summaryStyle: React.CSSProperties = {
  borderTop: '2px solid #ddd',
  paddingTop: '1rem',
};

const totalStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  textAlign: 'right',
  marginBottom: '1rem',
};

const actionsStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'flex-end',
};

const clearButtonStyle: React.CSSProperties = {
  backgroundColor: '#95a5a6',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
};

const checkoutButtonStyle: React.CSSProperties = {
  backgroundColor: '#27ae60',
  color: 'white',
  border: 'none',
  padding: '0.75rem 2rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
};

export default Cart;