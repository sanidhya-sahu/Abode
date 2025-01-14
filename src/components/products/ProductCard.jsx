import React from 'react';
import styles from '../../styles/FeaturedProducts.module.css';

const ProductCard = ({ id, name, mrp, sellingPrice, imageUrl }) => {
  const discount = ((mrp - sellingPrice) / mrp * 100).toFixed(0);

  return (
    <div className={styles.product}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} className={styles.image} />
        <div className={styles.overlay}>
          <button className={styles.addToCart}>Add to Cart</button>
        </div>
      </div>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.priceContainer}>
        <span className={styles.price}>₹{sellingPrice.toFixed(2)}</span>
        <span className={styles.mrp}>₹{mrp.toFixed(2)}</span>
        <span className={styles.discount}>{discount}% OFF</span>
      </div>
    </div>
  );
};

export default ProductCard;