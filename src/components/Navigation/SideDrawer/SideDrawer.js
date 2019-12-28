import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes, { SideDrawer, Close, Open } from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const sideDrawer = ({ closed, open }) => {
  let attatchClases = [SideDrawer, Close];
  if (open) {
    attatchClases = [SideDrawer, Open]
  };
  return (
    <Aux>
      <Backdrop show={ open } clicked={closed} />
      <div className={ attatchClases.join(' ') }>
        <div className={ classes.Logo }>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
    );
}

export default sideDrawer;
