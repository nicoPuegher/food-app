import React from 'react';
import styles from './Welcome.module.css';

const Welcome = () => (
  <section className={styles.container}>
    <h1>Welcome</h1>
    <hr />
    <p>
      The Corner is a little startup build from the ground up by a very
      passionate chef that wants to spread out home-made Argentinian cuisine.
    </p>
    <p>
      Right now we only sell empanadas because
      <span> we want to ensure and not compromise </span>the freshness of all
      our engredients .
    </p>
    <p>
      For the same reason
      <span> we only accept orders in advance</span>, at least until we can
      estimate our clientele and buy engredients accordingly.
    </p>
  </section>
);

export default Welcome;
