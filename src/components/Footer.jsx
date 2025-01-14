import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.title}>Abode</h3>
            <p className={styles.description}>Beautiful home decor and lighting solutions for modern living.</p>
          </div>
          <div>
            <h4 className={styles.subtitle}>Quick Links</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}><a href="#" className={styles.link}>About Us</a></li>
              <li className={styles.listItem}><a href="#" className={styles.link}>Contact</a></li>
              <li className={styles.listItem}><a href="#" className={styles.link}>FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.subtitle}>Customer Service</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}><a href="#" className={styles.link}>Shipping Policy</a></li>
              <li className={styles.listItem}><a href="#" className={styles.link}>Returns & Exchanges</a></li>
              <li className={styles.listItem}><a href="#" className={styles.link}>Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.subtitle}>Newsletter</h4>
            <div className={styles.newsletter}>
              <input 
                type="email" 
                placeholder="Your email"
                className={styles.input}
              />
              <button className={styles.button}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; 2024 Abode. All rights reserved.</p>
          <div className={styles.social}>
            <FiFacebook className={styles.socialIcon} />
            <FiTwitter className={styles.socialIcon} />
            <FiInstagram className={styles.socialIcon} />
            <FiLinkedin className={styles.socialIcon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;