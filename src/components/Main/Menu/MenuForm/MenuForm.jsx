import React from 'react';
import styles from './MenuForm.module.css';

const MenuForm = () => (
  <div className={styles.form}>
    <form>
      <input type="number" placeholder="1" />
      <button type="submit">+</button>
    </form>
  </div>
);

export default MenuForm;
