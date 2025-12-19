import React, { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { productService } from '../services/api';
import ProductCard from '../components/ProductCard';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchProducts();
      return;
    }

    try {
      setLoading(true);
      const data = await productService.searchProducts(searchTerm);
      setProducts(data);
    } catch (err) {
      setError('Failed to search products');
      console.error('Error searching products:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div style={loadingStyle}>Loading products...</div>;
  }

  if (error) {
    return <div style={errorStyle}>{error}</div>;
  }

  return (
    <div style={containerStyle}>
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch} style={searchButtonStyle}>
          Search
        </button>
        <button onClick={fetchProducts} style={clearButtonStyle}>
          Clear
        </button>
      </div>

      <div style={gridStyle}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div style={emptyStyle}>No products found</div>
      )}
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem',
};

const searchContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  marginBottom: '2rem',
  alignItems: 'center',
};

const searchInputStyle: React.CSSProperties = {
  flex: 1,
  padding: '0.75rem',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '1rem',
};

const searchButtonStyle: React.CSSProperties = {
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
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

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '2rem',
};

const loadingStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '2rem',
  fontSize: '1.2rem',
};

const errorStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '2rem',
  color: '#e74c3c',
  fontSize: '1.2rem',
};

const emptyStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '2rem',
  fontSize: '1.2rem',
  color: '#666',
};

export default ProductList;