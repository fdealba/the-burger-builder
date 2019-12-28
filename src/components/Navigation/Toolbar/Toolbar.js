import React from 'react';
import classes, { Toolbar, DesktopOnly } from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ({drawerToggleClicked}) => (
  <header className={ Toolbar }>
    <DrawerToggle clicked={drawerToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={ DesktopOnly }>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
