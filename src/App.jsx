import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <>
      {cartIsOpen && <Cart onCloseCart={closeCartHandler} />}
      <Header
        cartIsOpen={cartIsOpen}
        onOpenCart={openCartHandler}
        onCloseCart={closeCartHandler}
      />
      <Main />
    </>
  );
};

export default App;
