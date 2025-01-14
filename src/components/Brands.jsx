import React from 'react';
import styles from '../styles/Brands.module.css';

const Brands = () => {
  const brands = ['vitra', 'magisso', 'louis poulsen', 'nichetto', 'pracht'];
  
  return (
    <div className={styles.brands}>
      <div className={styles.container}>
        <div className={styles.brandList}>
          {brands.map((brand, index) => (
            <img 
              key={index}
              src={`/images/brands/${brand}.png`}
              alt={brand}
              className={styles.brandImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;