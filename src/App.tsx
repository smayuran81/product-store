import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={appStyle}>
          <Header />
          <main style={mainStyle}>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

const appStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
};

const mainStyle: React.CSSProperties = {
  minHeight: 'calc(100vh - 80px)',
};

export default App;
