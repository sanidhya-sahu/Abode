import React from 'react';
import styles from '../../styles/common/ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
  <div className={styles.error}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;