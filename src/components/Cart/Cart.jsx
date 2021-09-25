import React from 'react';
import styles from './Cart.module.css';

const Cart = () => (
  <div className={styles.cart}>
    <div className={styles.backdrop} />
    <section className={styles.container}>
      <ul>
        <li>
          <div className={styles.empanada}>
            <h3>Meat</h3>
            <span>$1.17</span>
            <span>x1</span>
          </div>
          <div className={styles.form}>
            <form>
              <button type="button">-</button>
              <button type="button">+</button>
            </form>
          </div>
        </li>
        <li>
          <div className={styles.empanada}>
            <h3>Meat</h3>
            <span>$1.17</span>
            <span>x1</span>
          </div>
          <div className={styles.form}>
            <form>
              <button type="button">-</button>
              <button type="button">+</button>
            </form>
          </div>
        </li>
        <li>
          <div className={styles.empanada}>
            <h3>Meat</h3>
            <span>$1.17</span>
            <span>x1</span>
          </div>
          <div className={styles.form}>
            <form>
              <button type="button">-</button>
              <button type="button">+</button>
            </form>
          </div>
        </li>
        <li>
          <div className={styles.empanada}>
            <h3>Meat</h3>
            <span>$1.17</span>
            <span>x1</span>
          </div>
          <div className={styles.form}>
            <form>
              <button type="button">-</button>
              <button type="button">+</button>
            </form>
          </div>
        </li>
      </ul>
      <hr />
      <div className={styles.total}>
        <h3>Total Amount</h3>
        <span>$0.00</span>
      </div>
      <div className={styles.buttons}>
        <button type="button">Close</button>
        <button type="button">Order</button>
      </div>
    </section>
  </div>
);

export default Cart;
