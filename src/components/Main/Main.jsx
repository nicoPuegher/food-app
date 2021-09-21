import React from 'react';
import './Main.module.css';
import Background from './Background/Background';
// import Welcome from './Welcome/Welcome';
import Menu from './Menu/Menu';

const Main = () => (
  <main>
    <Background />
    {/* <Welcome /> */}
    <Menu />
  </main>
);

export default Main;
