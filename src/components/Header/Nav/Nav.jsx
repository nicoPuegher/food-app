import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.module.css';

let selectedPage;

const Nav = ({ onNavigation }) => {
  const [showMenu, setShowMenu] = useState(false);

  const displayMenuHandler = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  const navigationHandler = (event) => {
    setShowMenu(false);
    onNavigation(event.target.name);
    selectedPage = event.target.name;
  };

  const homeSelected = `${selectedPage === 'home' ? `${styles.active}` : ''}`;
  const menuSelected = `${selectedPage === 'menu' ? `${styles.active}` : ''}`;
  const contactSelected = `${
    selectedPage === 'contact' ? `${styles.active}` : ''
  }`;

  console.log(homeSelected);

  return (
    <>
      <nav className={styles.nav}>
        <div
          className={styles.container}
          role="none"
          onClick={displayMenuHandler}
        >
          <i className="fa fa-bars" />
        </div>

        {showMenu && (
          <div className={styles.menu}>
            <button
              className={homeSelected}
              type="button"
              onClick={navigationHandler}
              name="home"
            >
              Home
            </button>
            <button
              className={menuSelected}
              type="button"
              onClick={navigationHandler}
              name="menu"
            >
              Menu
            </button>
            <button
              className={contactSelected}
              type="button"
              onClick={navigationHandler}
              name="contact"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;

Nav.propTypes = {
  onNavigation: PropTypes.func.isRequired,
};
