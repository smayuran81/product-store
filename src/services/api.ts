import axios from 'axios';
import { Product } from '../types/Product';

const API_BASE_URL = 'http://localhost:8080/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productService = {
  getAllProducts: (): Promise<Product[]> => 
    api.get('/products').then(response => response.data),
  
  getProductById: (id: number): Promise<Product> => 
    api.get(`/products/${id}`).then(response => response.data),
  
  searchProducts: (keyword: string): Promise<Product[]> => 
    api.get(`/products/search?keyword=${keyword}`).then(response => response.data),
  
  getProductsByPriceRange: (minPrice: number, maxPrice: number): Promise<Product[]> => 
    api.get(`/products/price-range?minPrice=${minPrice}&maxPrice=${maxPrice}`).then(response => response.data),
};