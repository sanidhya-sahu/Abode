import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ball-Shaped<br />Table Night Lamp
          </h2>
          <button className={styles.button}>SHOP NOW</button>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src="/images/rabbit.jpg" 
            alt="Ball-Shaped Table Lamp" 
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;