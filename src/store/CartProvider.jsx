/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import CartContext from './cartContext';

const CartProvider = ({ children }) => {
  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
