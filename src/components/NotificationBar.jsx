import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import styles from '../styles/NotificationBar.module.css';

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.notificationBar}>
      <div className={styles.container}>
        <p className={styles.message}>
          🎉 Get instant 10% off on Pre-Paid orders.
          <a href="#" className={styles.link}>Shop Now</a>
        </p>
        <button 
          className={styles.closeButton}
          onClick={() => setIsVisible(false)}
          aria-label="Close notification"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default NotificationBar;