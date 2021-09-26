import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderCart.module.css';

const HeaderCart = ({ cartIsOpen, onOpenCart, onCloseCart }) => {
  const keyDownHandler = (event) => {
    if (cartIsOpen) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        onCloseCart();
      }
    } else if (!cartIsOpen) {
      if (event.keyCode === 32 || event.keyCode === 13) {
        onOpenCart();
      }
    }
  };

  return (
    <div
      className={styles.cart}
      onClick={onOpenCart}
      onKeyDown={keyDownHandler}
      role="button"
      tabIndex={0}
    >
      <span>Cart</span>
      <span>0</span>
    </div>
  );
};
export default HeaderCart;

HeaderCart.propTypes = {
  cartIsOpen: PropTypes.bool.isRequired,
  onOpenCart: PropTypes.func.isRequired,
  onCloseCart: PropTypes.func.isRequired,
};
