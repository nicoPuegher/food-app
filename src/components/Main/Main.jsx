import React, { useState, useEffect } from 'react';
import './Main.module.css';
import PropTypes from 'prop-types';
import Background from './Background/Background';
import Welcome from './Welcome/Welcome';
import Menu from './Menu/Menu';
import Contact from './Contact/Contact';

const Main = ({ onNavigationChange }) => {
  const [navigation, setNavigation] = useState('');

  useEffect(() => {
    setNavigation(onNavigationChange);
  }, [onNavigationChange]);

  return (
    <main>
      <Background />
      {navigation === 'home' && <Welcome />}
      {navigation === 'menu' && <Menu />}
      {navigation === 'contact' && <Contact />}
    </main>
  );
};
export default Main;

Main.propTypes = {
  onNavigationChange: PropTypes.string.isRequired,
};
