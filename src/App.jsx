import React, { useState } from 'react';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [navigation, setNavigation] = useState('home');

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  const navigationHandler = (sectionName) => {
    setNavigation(sectionName);
  };

  return (
    <CartProvider>
      {cartIsOpen && <Cart onCloseCart={closeCartHandler} />}
      <Header
        cartIsOpen={cartIsOpen}
        onOpenCart={openCartHandler}
        onCloseCart={closeCartHandler}
        onNavigation={navigationHandler}
      />
      <Main onNavigationChange={navigation} />
    </CartProvider>
  );
};

export default App;
