import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuItem.module.css';
import MenuForm from '../MenuForm/MenuForm';
import CartContext from '../../../../store/cartContext';

const MenuItem = ({ id, image, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id,
      name,
      price,
      quantity,
    });
  };

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
            max: '6',
            step: '1',
            defaultValue: '1',
          }}
          onAddToCart={addToCartHandler}
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
