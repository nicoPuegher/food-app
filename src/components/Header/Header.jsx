import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import HeaderCart from './HeaderCart/HeaderCart';

const Header = ({ cartIsOpen, onOpenCart, onCloseCart }) => (
  <header>
    <div className={styles.container}>
      <h2>The Corner</h2>
      <HeaderCart
        cartIsOpen={cartIsOpen}
        onOpenCart={onOpenCart}
        onCloseCart={onCloseCart}
      />
    </div>
  </header>
);

export default Header;

Header.propTypes = {
  cartIsOpen: PropTypes.bool.isRequired,
  onOpenCart: PropTypes.func.isRequired,
  onCloseCart: PropTypes.func.isRequired,
};
