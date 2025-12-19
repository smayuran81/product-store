import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { state } = useCart();

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          <h1>TechStore</h1>
        </Link>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Products</Link>
          <Link to="/cart" style={cartLinkStyle}>
            Cart ({state.items.reduce((sum, item) => sum + item.cartQuantity, 0)})
          </Link>
        </nav>
      </div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '1rem 0',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: 'white',
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '2rem',
};

const linkStyle: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
};

const cartLinkStyle: React.CSSProperties = {
  ...linkStyle,
  backgroundColor: '#e74c3c',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
};

export default Header;