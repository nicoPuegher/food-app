import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Cart.module.css';

const Cart = ({ onCloseCart }) => {
  const cartItems = [
    { id: 'cartItem1', name: 'Meat', quantity: 3, price: 1.17 },
  ].map((item) => (
    <li key={item.id}>
      <div className={styles.empanada}>
        <h3>{item.name}</h3>
        <span>{`$${item.price}`}</span>
        <span>{`x${item.quantity}`}</span>
      </div>
      <div className={styles.form}>
        <form>
          <button type="button">-</button>
          <button type="button">+</button>
        </form>
      </div>
    </li>
  ));

  return ReactDOM.createPortal(
    <div className={styles.cart}>
      <div className={styles.backdrop} onClick={onCloseCart} role="none" />
      <section className={styles.container}>
        <ul>{cartItems}</ul>
        <hr />
        <div className={styles.total}>
          <h3>Total Amount</h3>
          <span>$0.00</span>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={onCloseCart}>
            Close
          </button>
          <button type="button">Order</button>
        </div>
      </section>
    </div>,
    document.getElementById('modal')
  );
};

export default Cart;

Cart.propTypes = {
  onCloseCart: PropTypes.func.isRequired,
};
