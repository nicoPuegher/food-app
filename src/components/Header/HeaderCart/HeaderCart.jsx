import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderCart.module.css';
import CartContext from '../../../store/cartContext';

const HeaderCart = ({ cartIsOpen, onOpenCart, onCloseCart }) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const itemsQuantity = items.reduce(
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

  const btnStyles = `${styles.cart} ${btnAnimation ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return undefined;
    }

    setBtnAnimation(true);

    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div
      className={btnStyles}
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
