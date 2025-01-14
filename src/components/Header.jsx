import React, { useEffect } from 'react';
import { FiSearch,FiUser, FiHeart, FiShoppingCart } from 'react-icons/fi';
import styles from '../styles/Header.module.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const search_cont = document.getElementById('search-container');
    const mobile_search_cont = document.getElementById('mobile-search-cont');
    if (window.innerWidth < 639) {
      search_cont.style.display = "none"
      mobile_search_cont.style.display = "flex"
    }
  })
  return (
    <header className={styles.header}>
      <div id='header-cont' className={styles.container}>
        <div className={styles.navbar}>
          <h1 className={styles.logo}>Abode</h1>

          <div id='search-container' className={styles.searchContainer}>
            <input
              type="search"
              placeholder="Search products..."
              className={styles.searchInput}
            />
            <FiSearch className={styles.icon} />
          </div>

          <div className={styles.icons}>
            <div className={styles.authButtons}>
              <button onClick={()=>{navigate('/login')}} className={styles.loginButton}>Login</button>
              <button onClick={()=>{navigate('/register')}} className={styles.registerButton}>Register</button>
            </div>
            <FiUser className={styles.icon} />
            <FiHeart className={styles.icon} />
            <div onClick={()=>{navigate('/cart')}} className={styles.cartIcon}>
              <FiShoppingCart className={styles.icon} />
              <span className={styles.cartBadge}>0</span>
            </div>
          </div>
        </div>
        <div id='mobile-search-cont' style={{display:'none'}} className={styles.searchContainer}>
            <input
              type="search"
              placeholder="Search products..."
              className={styles.searchInput}
            />
            <FiSearch className={styles.icon} />
          </div>
      </div>
    </header>
  );
};

export default Header;