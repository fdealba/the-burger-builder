import React from 'react';
import Aux from '../../hoc/Aux';
import { Content } from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ({children}) => (
  <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={Content}>
        {children}
      </main>
  </Aux>
);

export default layout
