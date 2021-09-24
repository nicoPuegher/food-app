import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuItem.module.css';
import MenuForm from '../MenuForm/MenuForm';

const MenuItem = ({ id, image, name, description, price }) => {
  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <>
      <li>
        <div className={styles.empanada}>
          <img src={image} alt="" />
          <div className={styles.info}>
            <h3>{name}</h3>
            <span>{description}</span>
            <span>{fixedPrice}</span>
          </div>
        </div>
        <MenuForm
          label="Item"
          input={{
            id: `itemForm_${id}`,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
      </li>
      <hr />
    </>
  );
};

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MenuItem;
