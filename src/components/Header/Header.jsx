import React from 'react';
import styles from './Header.module.css';
import HeaderCart from './HeaderCart/HeaderCart';

const Header = () => (
  <header>
    <div className={styles.container}>
      <h2>The Corner</h2>
      <HeaderCart />
    </div>
  </header>
);

export default Header;
