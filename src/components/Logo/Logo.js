import React from 'react';
import burgerlogo from '../../assets/images/burger-logo.png';
import { Logo } from './Logo.module.css';

const logo = props => (
  <div className={Logo}>
    <img src={burgerlogo} alt="BurgerBuilder" />
  </div>
);

export default logo;
