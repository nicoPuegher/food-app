import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderCart.module.css';
import CartContext from '../../../store/cartContext';

const HeaderCart = ({ cartIsOpen, onOpenCart, onCloseCart }) => {
  const cartCtx = useContext(CartContext);

  const itemsQuantity = cartCtx.items.reduce(
    (previousValue, item) => previousValue + item.quantity,
    0
  );

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
      <span>{itemsQuantity}</span>
    </div>
  );
};
export default HeaderCart;

HeaderCart.propTypes = {
  cartIsOpen: PropTypes.bool.isRequired,
  onOpenCart: PropTypes.func.isRequired,
  onCloseCart: PropTypes.func.isRequired,
};
