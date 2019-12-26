import React from 'react';
import { Toolbar } from './Toolbar.module.css';

const toolbar = props => (
  <header className={ Toolbar }>
    <div>MENU</div>
    <div>LOGO</div>
    <nav>
      <ul>
        <li>...</li>
      </ul>
    </nav>
  </header>
);

export default toolbar;