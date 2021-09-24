import React from 'react';
import styles from './Menu.module.css';
import MenuItem from './MenuItem/MenuItem';
import menuItems from '../../../helpers/menuItems';

const Menu = () => {
  const menuList = menuItems.map((item) => (
    <MenuItem
      key={item.id}
      id={item.id}
      image={item.image}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={styles.container}>
      <ul>{menuList}</ul>
    </section>
  );
};

export default Menu;
