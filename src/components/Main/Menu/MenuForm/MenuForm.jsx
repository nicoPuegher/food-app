import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './MenuForm.module.css';

const MenuForm = ({ label, input, onAddToCart }) => {
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const quantityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const itemQuantity = quantityInputRef.current.value;
    const itemQuantityNum = +itemQuantity;

    if (
      itemQuantity.trim().length === 0 ||
      itemQuantityNum < 1 ||
      itemQuantityNum > 5
    ) {
      setQuantityIsValid(false);
      return;
    }

    onAddToCart(itemQuantityNum);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.container}>
        <label htmlFor={input.id}>{label}</label>
        <input
          id={input.id}
          type={input.type}
          min={input.min}
          max={input.max}
          step={input.step}
          defaultValue={input.defaultValue}
          ref={quantityInputRef}
        />
        <button type="submit">+</button>
      </div>
      {!quantityIsValid && <p>Invalid</p>}
    </form>
  );
};

export default MenuForm;

MenuForm.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.objectOf(PropTypes.string).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
