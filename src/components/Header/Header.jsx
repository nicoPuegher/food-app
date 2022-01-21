import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Nav from './Nav/Nav';
import HeaderCart from './HeaderCart/HeaderCart';

const Header = ({ onNavigation, cartIsOpen, onOpenCart, onCloseCart }) => {
  const navigationHandler = (sectionName) => {
    onNavigation(sectionName);
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Nav onNavigation={navigationHandler} />
          <h2>The Corner</h2>
        </div>
        <HeaderCart
          cartIsOpen={cartIsOpen}
          onOpenCart={onOpenCart}
          onCloseCart={onCloseCart}
        />
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  onNavigation: PropTypes.func.isRequired,
  cartIsOpen: PropTypes.bool.isRequired,
  onOpenCart: PropTypes.func.isRequired,
  onCloseCart: PropTypes.func.isRequired,
};
