import React from 'react';
import styles from './MenuItem.module.css';
import meatEmpanada from '../../../../assets/empanadas/meat.jpeg';

const MenuItem = () => (
  <div className={styles.empanada}>
    <img src={meatEmpanada} alt="" />
    <div className={styles.info}>
      <h3>Meat</h3>
      <span>
        Minced meat, white onion, green onion, peppers, and hard-boiled egg.
      </span>
      <span>$1.17</span>
    </div>
  </div>
);

export default MenuItem;
