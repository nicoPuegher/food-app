import React from 'react';
import styles from './HeaderCart.module.css';

const HeaderCart = () => (
  <div className={styles.cart}>
    <span>Cart</span>
    <button type="button">0</button>
  </div>
);

export default HeaderCart;
