import React from 'react';
import styles from './Menu.module.css';
import MenuItem from './MenuItem/MenuItem';
import MenuForm from './MenuForm/MenuForm';

const Menu = () => (
  <section className={styles.container}>
    <ul>
      <li>
        <MenuItem />
        <MenuForm />
      </li>
      <hr />
      <li>
        <MenuItem />
        <MenuForm />
      </li>
      <hr />
      <li>
        <MenuItem />
        <MenuForm />
      </li>
      <hr />
      <li>
        <MenuItem />
        <MenuForm />
      </li>
      <hr />
      <li>
        <MenuItem />
        <MenuForm />
      </li>
      <hr />
    </ul>
  </section>
);

export default Menu;
