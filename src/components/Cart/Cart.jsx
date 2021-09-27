import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Cart.module.css';
import CartContext from '../../store/cartContext';

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const emptyCart = cartCtx.items.length === 0;

  const onRemoveHandler = (id) => {
    console.log(id);
  };
  const onAddHandler = (item) => {
    console.log(item);
  };

  const cartItems = cartCtx.items.map((item) => (
    <li key={item.id}>
      <div className={styles.empanada}>
        <h3>{item.name}</h3>
        <span>{`$${item.price.toFixed(2)}`}</span>
        <span>{`x${item.quantity}`}</span>
      </div>
      <div className={styles.form}>
        <form>
          <button type="button" onClick={onRemoveHandler.bind(null, item.id)}>
            -
          </button>
          <button type="button" onClick={onAddHandler.bind(null, item)}>
            +
          </button>
        </form>
      </div>
    </li>
  ));

  return ReactDOM.createPortal(
    <div className={styles.cart}>
      <div className={styles.backdrop} onClick={onCloseCart} role="none" />
      <section className={styles.container}>
        <ul>{cartItems}</ul>
        {!emptyCart && <hr />}
        <div className={styles.total}>
          <h3>Total Amount</h3>
          <span>{totalAmount}</span>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={onCloseCart}>
            Close
          </button>
          {!emptyCart && <button type="button">Order</button>}
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
