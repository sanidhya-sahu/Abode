import { API_BASE_URL, API_ENDPOINTS } from './config';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.products}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};