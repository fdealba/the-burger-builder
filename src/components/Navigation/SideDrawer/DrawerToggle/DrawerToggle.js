import React from 'react';
import { DrawerToggle } from './DrawerToggle.module.css';

const drawerToggler = ({ clicked }) => (
  <div onClick={ clicked } className={ DrawerToggle }>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggler;
