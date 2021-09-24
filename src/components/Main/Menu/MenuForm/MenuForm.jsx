import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuForm.module.css';

const MenuForm = ({ label, input }) => (
  <div className={styles.form}>
    <form>
      <label htmlFor={input.id}>{label}</label>
      <input
        id={input.id}
        type={input.type}
        min={input.min}
        max={input.max}
        step={input.step}
        defaultValue={input.defaultValue}
      />
      <button type="submit">+</button>
    </form>
  </div>
);

export default MenuForm;

MenuForm.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.objectOf(PropTypes.string).isRequired,
};
