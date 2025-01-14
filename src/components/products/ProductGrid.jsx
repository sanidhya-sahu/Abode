import React from 'react';
import ProductCard from './ProductCard';
import styles from '../../styles/FeaturedProducts.module.css';

const ProductGrid = ({ products }) => (
  <div className={styles.grid}>
    {products.products.map(product => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
);

export default ProductGrid;